/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

document.getElementById("btn__reset").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
  phrase = getRandomPhrase();
  phraseArray = phrase.split("");

  phraseArray.forEach(addElement);

  function addElement(element) {
    console.log(element);
    document.getElementById(
      "phrase"
    ).innerHTML += ` <li class="hide letter ${element} "> </li>`;
  }

  console.log(phraseArray);
});

phrases = ["hi", "bye", "nine", "fine"];

function getRandomPhrase() {
  phrase = phrases[Math.floor(Math.random() * phrases.length)];
  return phrase;
}

function checkLetter() {
  if (this.letter === letter) {
    console.log(letter);
  }
}
