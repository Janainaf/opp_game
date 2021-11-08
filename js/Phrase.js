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
    phraseArray = phrase.split("");

    phraseArray.forEach(addElement);

    function addElement(element) {
      console.log(element);
      document.getElementById(
        "phrase"
      ).innerHTML += ` <li class="hide letter ${element} "> </li>`;
    }

    console.log(phraseArray);
  }

  checkLetter() {
    if (this.letter === letter) {
      console.log(letter);
    }
  }
  showMatchedLetter() {}
}
