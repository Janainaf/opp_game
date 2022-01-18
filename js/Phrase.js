/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */

  addPhraseToDisplay() {
    console.log(this.phrase);
    let splitPhrase = this.phrase.split("");
    splitPhrase.forEach(addElement);
    function addElement(element) {
      if (element != " ") {
        document.getElementById(
          "phrase"
        ).innerHTML += `<li class="hide letter ${element}"> ${element}</li>`;
      } else {
        document.getElementById(
          "phrase"
        ).innerHTML += `<li class="space"> </li>`;
      }
    }
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */

  checkLetter(target) {
    let checkPhrase = this.phrase.split("");
    var keys = document.getElementsByClassName("key");
    for (var i = 0; i < keys.length; i++) {
      this.letter = target.innerText || target.innerText;
      let letter = this.letter;
      if (checkPhrase.includes(letter)) {
        return letter;
      }
    }
  }

  showMatchedLetter(letter) {
    var divs = document.getElementsByClassName(`letter ${letter}`),
      i;
    for (i = 0; i < divs.length; i++) {
      divs[i].classList.remove("hide");
      divs[i].classList.add("show");
    }
  }
}
