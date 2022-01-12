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
    console.log(this.missed);
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
    // console.log("calling remove life " + missed);
    game.missed++;
    // console.log("lives missed " + game.missed);

    var heartList = document.querySelector("ol");
    var heartTries = document.querySelectorAll(".tries");
    heartList.removeChild(heartTries[0]);
    heartList.innerHTML +=
      '<li class="tries"><img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></li>';
  }

  gameOver() {
    document.getElementById("overlay").style.display = null;
    document.getElementById("overlay").classList.add("lose");
    document.getElementById("game-over-message").innerHTML = "Game Over";
  }

  checkForWin() {
    if (win.length === this.activePhrase.phrase.length) {
      document.getElementById("overlay").style.display = null;
      document.getElementById("overlay").classList.add("win");
      document.getElementById("game-over-message").innerHTML = "You Won";
    }
  }

  handleInteraction(letter) {
    let phrase = new Phrase(this.activePhrase.phrase);
    console.log(phrase);
    console.log("hello phrase " + phrase.phrase);
    let checkPhrase = phrase.phrase.split("");
    let win = [];
    var keys = document.getElementsByClassName("key");

    [].forEach.call(keys, function (key) {
      key.addEventListener("click", listener);
    });

    function listener(e) {
      // e = e || window.event;
      let target = e.target;
      phrase.checkLetter(target, letter);

      target.removeEventListener("click", listener);
      e.preventDefault();
      e.stopPropagation();
      if (phrase.checkLetter(target, letter) != phrase.letter) {
        game.removeLife(game.missed);
        console.log(game.missed);
        if (game.missed === 5) {
          console.log("game over pal");
          game.gameOver();
        }
      } else {
        phrase.showMatchedLetter(phrase.letter);
      }
    }

    // [].forEach.call(keys, function (key) {
    //   key.removeEventListener("click", listener, false);
    // });
    // for (var i = 0; i < keys.length; i++) {
    //   keys.item(i).addEventListener(
    //     "click",
    //     function (e) {
    //       // e = e || window.event;
    //       var target = e.target;
    //       phrase.checkLetter(target, letter);
    //       e.preventDefault();

    //       if (phrase.checkLetter(target, letter) != phrase.letter) {
    //         game.removeLife(game.missed);
    //         console.log(game.missed);

    //         if (game.missed === 5) {
    //           console.log("game over pal");
    //           game.gameOver();
    //         }
    //       } else {
    //         phrase.showMatchedLetter(phrase.letter);
    //       }
    //     },
    //     false
    //   );
    // }
  }
}
