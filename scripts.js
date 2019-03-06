function startGame() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var img = ctx.drawImage(img, 10, 10);
}
var clicksCounter = 0;
function updateCounter() {
  clicksCounter++;
  document.getElementById("counted").innerHTML =
    "This has been clicked " + clicksCounter + " times.";
}
