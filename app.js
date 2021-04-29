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
function jqueryEvents() {
  $("nav a").hover(
    function () {
      $(this).css("font-weight", "bold");
    },
    function () {
      $(this).css("font-weight", "normal");
    }
  );
  $("img").click(function () {
    if ($(this).css("width") == "200px") {
      $(this).css("width", "100%");
    } else {
      $(this).css("width", "200px");
    }
  });
}
$(jqueryEvents);
