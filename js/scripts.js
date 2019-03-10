//Get elements
var img = document.getElementById("clickImage");
var counter = document.getElementById("counter");
var labelPrecioClicks = document.getElementById("labelPrecioClicks");
var buttonComprarClicks = document.getElementById("buttonComprarClicks");

//Variables to use
var precioClicks = 10;
var precioBunnyWorkers = 100;
var precioTrucks = 1000;
var precioBackhoe = 10000;

//Booleans to unlock new improvements
var comproAutoclicks = false;
var comproBunnyWorkers = false;
var comproTrucks = false;
var comproBackhoe = false;

//Quantity of items
var cantidadAutoclick = 0;
var cantidadBunnyWorkers = 0;
var cantidadTrucks = 0;
var cantidadBackhoe = 0;

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
    clicksCounter -= precioClicks; //Baja el numero de clicks disponibles
    precioClicks += 10; //aumenta el precio de los clics
    cantidadAutoclick += 1; //aumenta la cantidad de Autoclicks obtenidos
    autoClick(1000); //ejecuta el auto click cada 1 segundo
    document.getElementById("labelPrecioClicks").innerHTML =
      "Buy autoClicks by " + precioClicks + " clicks"; // cambia el label
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

//prueba
