"use strict";
function randomGreeting() {
  const greeting = ["Gud'ay", "Goede dag", "Bom dia", "Hello there"];
  let name = document.getElementById("name").value;
  if (!name) {
    name = "nobody";
  }
  let chosenGreeting =
    greeting[Math.floor(Math.random() * greeting.length)] + ", " + name + "!";
  alert("Here is you free* random greeting:\n\n" + chosenGreeting);
}
