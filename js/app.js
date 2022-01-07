/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// let chosen = document.getElementsByClassName("chosen");
// let win = [];

// function Clean() {
//   document.getElementById("phrase").innerHTML = `<li class=""></li>`;
//   Array.from(document.getElementsByClassName("chosen")).forEach(function (
//     item
//   ) {
//     item.classList.remove("chosen");
//     item.classList.add("key");
//   });

//   document.getElementById("overlay").classList.remove("win");
//   document.getElementById("overlay").classList.remove("lose");

//   Array.from(document.querySelectorAll(".tries")).forEach(function (item) {
//     item.innerHTML =
//       '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">';
//   });

//   // TA UM CAOS - O WIN AND MISSED NAO TA FUNCIONANDOOOO
//   // ta rolando uma duplicaçao ali no event listener que nao to entendendo, talvez
//   // verificar o event, mas os else e if tb
//   // certeza que eh isso porque ele esta limpando certinho mas duplicando quando faço um clique
// }

// document.getElementById("btn__reset").addEventListener("click", function () {
//   Clean();

//   document.getElementById("overlay").style.display = "none";
//   phrase = getRandomPhrase().toLowerCase();
//   phraseArray = phrase.split("");

//   phraseArray.forEach(addElement);

//   function addElement(element) {
//     if (element != " ") {
//       document.getElementById(
//         "phrase"
//       ).innerHTML += `<li class="hide letter ${element}"> ${element}</li>`;
//     } else {
//       document.getElementById("phrase").innerHTML += `<li class="space"> </li>`;
//     }
//   }

//   let missed = 0;
//   var keys = document.getElementsByClassName("key");

//   for (var i = 0; i < keys.length; i++) {
//     keys.item(i).addEventListener(
//       "click",
//       function (e) {
//         e = e || window.event;
//         var target = e.target;
//         target.className = "chosen";
//         text = target.textContent || target.innerText;
//         console.log(text);

//         if (phraseArray.includes(text)) {
//           var divs = document.getElementsByClassName(`letter ${text}`),
//             i;
//           for (i = 0; i < divs.length; i++) {
//             divs[i].classList.remove("hide");
//             divs[i].classList.add("show");
//             win.push(1);
//           }
//         } else {
//           ++missed;
//           console.log(missed);

//           var heartList = document.querySelector("ol");
//           var heartTries = document.querySelectorAll(".tries");
//           heartList.removeChild(heartTries[0]);
//           heartList.innerHTML +=
//             '<li class="tries"><img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></li>';
//           if (missed === 5) {
//             win = [];
//             missed = 0;
//             document.getElementById("overlay").style.display = null;
//             document.getElementById("overlay").classList.add("lose");
//             document.getElementById("game-over-message").innerHTML =
//               "Game Over";
//           }
//         }
//         if (win.length === phraseArray.length) {
//           win = [];
//           missed = 0;
//           document.getElementById("overlay").style.display = null;
//           document.getElementById("overlay").classList.add("win");
//           document.getElementById("game-over-message").innerHTML = "You Won";
//         }
//       },
//       false
//     );
//   }
// });

// phrases = ["HI there", "I love you", "YOu are the best"];

// function getRandomPhrase() {
//   phrase = phrases[Math.floor(Math.random() * phrases.length)];
//   return phrase;
// }

// function checkLetter() {
//   if (this.letter === letter) {
//   }
// }

// **************** test area *************
let game;

document.getElementById("btn__reset").addEventListener("click", function () {
  game = new Game();
  game.startGame();
  game.handleInteraction();
});
