/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//         checkLetter(): checks to see if the letter selected by the player matches a letter in the phrase.
//         showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class.

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  addPhraseToDisplay() {
    for (var i = 0; i < phrase.length; i++) {
      console.log(i);
      document.getElementById("phrase").innerHTML +=
        '<li class="hide letter"> </li>';
    }
  }
  checkLetter() {
    if (this.letter === letter) {
      console.log(letter);
    }
  }
  showMatchedLetter() {}
}
