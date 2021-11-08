/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor(missed, phrases, activePhrase) {
    missed = 0;
    phrases = [
      "hi",
      "bye",
      "nine",
      "fine",
    ]; /*an array of five Phrase objects  */
    activePhrase = null;
  }

  startGame() {
    document.getElementById("overlay").style.display = "none";
    phrase = getRandomPhrase();
    activePhrase = this.phrase;
    addPhraseToDisplay(activePhrase);
  }

  getRandomPhrase() {
    phrase = phrases[Math.floor(Math.random() * phrases.length)];
    return phrase;
  }

  handleInteraction() {
    //  It checks to see if the button clicked by the player matches a letter in the phrase,
    // and then directs the game based on a correct or incorrect guess. This method should:
    // Disable the selected letter’s onscreen keyboard button.
    // If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.
    // If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.
  }

  removeLife() {
    missed += 1;
    if (missed == 5) {
      gameOver();
    }
  }

  checkForWin() {}

  gameOver() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("id").classList.remove("start");
    if (checkForWin == true) {
      document.getElementById("id").classList.add("win");
    } else {
      document.getElementById("id").classList.add("lost");
    }
  }
}
