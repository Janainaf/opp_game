/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      { phrase: "I am sorry" },
      { phrase: "Please forgive me" },
      { phrase: "I Thank you" },
      { phrase: "I love you" },
      { phrase: "Wish you well" },
    ];
    this.activePhrase = null;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    let phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    return phrase;
    //return an object
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */

  startGame() {
    document.getElementById("overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    console.log(this.activePhrase.phrase);
    let phrase = new Phrase(this.activePhrase.phrase);
    phrase.addPhraseToDisplay();
  }

  removeLife(missed) {
    game.missed++;

    var heartList = document.querySelector("ol");
    var heartTries = document.querySelectorAll(".tries");
    heartList.removeChild(heartTries[0]);
    heartList.innerHTML +=
      '<li class="tries"><img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></li>';
    if (game.missed === 5) {
      this.gameOver();
    }
  }

  gameOver() {
    if (game.missed === 5) {
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
    let phrase = new Phrase(this.activePhrase.phrase);
    var keys = document.getElementsByClassName("key");

    [].forEach.call(keys, function (key) {
      key.addEventListener("click", listener);
    });

    function listener(e) {
      e = e || window.event;
      let target = e.target;
      phrase.checkLetter(target, letter);

      // Disables the selected letters onscreen keyboard button if the phrase does not include the guessed letter
      target.removeEventListener("click", listener);

      // if the phrase does not include letter, the wrong css class is added and removelife is called
      if (phrase.checkLetter(target, letter) != phrase.letter) {
        var keys = document.getElementsByClassName("key");
        for (var i = 0; i < keys.length; i++) {
          this.letter = target.innerText || target.innerText;
          target.className = "wrong";
        }
        game.removeLife(game.missed);
      } else {
        target.className = "chosen";
        phrase.showMatchedLetter(phrase.letter);
        game.checkForWin();
      }
    }
  }
}
