/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

document.getElementById("btn__reset").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
  phrase = getRandomPhrase();
  for (var i = 0; i < phrase.length; i++) {
    console.log(i);
    document.getElementById("phrase").innerHTML +=
      '<li class="hide letter"> </li>';
  }
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
