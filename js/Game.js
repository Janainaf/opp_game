/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("I am sorry"),
      new Phrase("Please forgive me"),
      new Phrase("I Thank you"),
      new Phrase("I love you"),
      new Phrase("Wish you well"),
    ];
    this.activePhrase = null;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    let randomPhrase =
      this.phrases[Math.floor(Math.random() * this.phrases.length)];
    return randomPhrase;
    //return an object
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */

  startGame() {
    document.getElementById("overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  removeLife() {
    this.missed++;
    var heartList = document.querySelector("ol");
    var heartTries = document.querySelectorAll(".tries");
    heartList.removeChild(heartTries[0]);
    heartList.innerHTML +=
      '<li class="tries"><img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></li>';
    if (this.missed === 5) {
      this.gameOver();
    }
  }

  gameOver() {
    if (this.missed === 5) {
      document.getElementById("overlay").style.display = null;
      document.getElementById("overlay").classList.add("lose");
      document.getElementById("game-over-message").innerHTML = "Game Over";
    } else {
      document.getElementById("overlay").style.display = null;
      document.getElementById("overlay").classList.add("win");
      document.getElementById("game-over-message").innerHTML = "You Won";
    }
  }

  checkForWin() {
    var divs = document.getElementsByClassName("show");
    var noSpace = this.activePhrase.phrase;
    noSpace = noSpace.replace(/ +/g, "");
    if (divs.length === noSpace.length) {
      this.gameOver();
    }
  }

  handleInteraction(letter) {
    var keys = document.getElementsByClassName("key");
    let phrase = this.activePhrase;

    let listener = (e) => {
      e = e || window.event;
      let target = e.target;
      phrase.checkLetter(target, letter);

      // Disables the selected letters onscreen keyboard button if the phrase does not include the guessed letter
      target.removeEventListener("click", listener);

      // if the phrase does not include letter, the wrong css class is added and removelife is called
      if (phrase.checkLetter(target, letter) != phrase.letter) {
        var keys = document.getElementsByClassName("key");
        this.removeLife(this.missed);

        for (var i = 0; i < keys.length; i++) {
          this.letter = target.innerText || target.innerText;
          target.className = "wrong";
        }
      } else {
        target.className = "chosen";
        phrase.showMatchedLetter(phrase.letter);
        this.checkForWin();
      }
    };

    [].forEach.call(keys, function (key) {
      key.addEventListener("click", listener);
    });
  }
}
