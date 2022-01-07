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
    let passPhrase = new Phrase(this.activePhrase.phrase);
    passPhrase.addPhraseToDisplay();
    // console.log(game.activePhrase);
  }

  removeLife(missed) {
    console.log("calling remove life " + missed);
    game.missed++;
    console.log(game.missed);
    var heartList = document.querySelector("ol");
    var heartTries = document.querySelectorAll(".tries");
    heartList.removeChild(heartTries[0]);
    heartList.innerHTML +=
      '<li class="tries"><img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></li>';
  }

  handleInteraction(letter) {
    let phrase = new Phrase(this.activePhrase.phrase);
    console.log("hello phrase " + phrase.phrase);
    let checkPhrase = phrase.phrase.split("");
    var keys = document.getElementsByClassName("key");
    for (var i = 0; i < keys.length; i++) {
      keys.item(i).addEventListener("click", function (e) {
        e = e || window.event;
        var target = e.target;
        phrase.checkLetter(target, letter);
        console.log("Hey there is a letter- " + phrase.letter);

        if (phrase.checkLetter(target, letter) != phrase.letter) {
          console.log("ALERT *** NOT A MATCH " + phrase.letter);
          game.removeLife(game.missed);
        } else {
          // console.log("Not a match i guess" + phrase.letter);
          console.log("YESSS A MATCHHH+ " + phrase.letter);
          phrase.showMatchedLetter(phrase.letter);
        }
      });
    }
  }

  // checkForWin() {}
  // // gameOver() {
  // //   document.getElementById("overlay").style.display = "block";
  // //   document.getElementById("id").classList.remove("start");
  // //   if (checkForWin == true) {
  // //     document.getElementById("id").classList.add("win");
  // //   } else {
  // //     document.getElementById("id").classList.add("lose");
  // //   }
  // // }

  // gameOver() {
  // if (missed === 5) {
  //   // gameOver();
  //   document.getElementById("overlay").style.display = null;
  //   document.getElementById("overlay").classList.add("lose");
  //   document.getElementById("game-over-message").innerHTML = "Game Over";
  // }

  //   document.getElementById("overlay").style.display = null;
  //   document.getElementById("overlay").classList.add("lose");
  //   document.getElementById("game-over-message").innerHTML = "Game Over";
  // }
}
