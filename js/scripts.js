//Get elements
var img = document.getElementById("clickImage");
var counter = document.getElementById("counter");
var labelPrecioClicks = document.getElementById("labelPrecioClicks");
var buttonComprarClicks = document.getElementById("buttonComprarClicks");
//Variables to use
var precioClicks = 10;

//Counter the clicks
var clicksCounter = 0;

//onclick of the image in the html doc
function clickImage() {
  clicksCounter++;
  updateCounter();
}

//Update the counter of the clicks
function updateCounter() {
  document.getElementById("counter").innerHTML =
    "This has been clicked " + clicksCounter + " times.";
}

//Buy a "mouse" to click every 1 second
function comprarclicks() {
  if (clicksCounter >= precioClicks) {
    clicksCounter -= precioClicks;
    precioClicks += 10;
    autoClick(1000);
    document.getElementById("labelPrecioClicks").innerHTML =
      "Comprar autoClicks por " + precioClicks + " clicks";
    updateCounter();
    messageIT("Clicks", 3000);
  }
}

//Messages with iziToast
function messageIT(item, duration) {
  iziToast.show({
    title: "✔",
    message: "More " + item + " !",
    timeout: duration,
    theme: "dark"
  });
}
//Auto click that depends on the time delay
function autoClick(timeDelay) {
  window.setInterval(function() {
    clickImage();
  }, timeDelay);
}
