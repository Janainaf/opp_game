/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

function reset() {
  document.getElementById("phrase").innerHTML = `<li class=""></li>`;
  document.getElementById("overlay").classList.remove("win");
  document.getElementById("overlay").classList.remove("lose");

  Array.from(document.getElementsByClassName("chosen")).forEach(function (
    item
  ) {
    item.classList.remove("chosen");
    item.classList.add("key");
  });

  Array.from(document.getElementsByClassName("wrong")).forEach(function (item) {
    item.classList.remove("wrong");
    item.classList.add("key");
  });
  Array.from(document.querySelectorAll(".tries")).forEach(function (item) {
    item.innerHTML =
      '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">';
  });

  var keys = document.getElementsByClassName("key");
  [].forEach.call(keys, function (key) {
    key.outerHTML = key.outerHTML;
  });
}

let game;

document.getElementById("btn__reset").addEventListener("click", function () {
  reset();
  game = new Game();
  game.startGame();
  game.handleInteraction();
});
