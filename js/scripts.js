//Get elements
var img = document.getElementById("clickImage");
var counter = document.getElementById("counter");
var labelPrecioClicks = document.getElementById("labelPrecioClicks");
var buttonComprarClicks = document.getElementById("buttonComprarClicks");
var labelOwnedClicks = document.getElementById("labelOwnedClicks");
console.log(labelOwnedClicks);
//Variables incrementables
var precioIncrementalClicks = 10;
var precioIncrementalBunnyWorkers = 100;
var precioIncrementalTrucks = 1000;
var precioIncrementalBackhoe = 10000;

//Variables original
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
var clicksCounter = 100000;

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
    cantidadAutoclick += 1; //aumenta la cantidad de Autoclicks obtenidos
    increasePrice("autoClick", cantidadAutoclick); //aumenta el precio incrementable
    precioClicks += precioIncrementalClicks; //precio base += el precio aumentado
    autoClick(1000); //activa que se ejecute el auto click cada 1 segundo
    document.getElementById("labelPrecioClicks").innerHTML =
      "Buy autoClicks by " +
      precioClicks +
      " clicks" +
      "<br> Owned = " +
      cantidadAutoclick +
      ""; // cambia el label
    labelOwned(labelOwnedClicks, cantidadAutoclick);
    updateCounter();
    messageIT("Clicks", 3000); //mensaje con izitoast
  }
}

function comprarbunnyworkers() {
  if (clicksCounter >= precioBunnyWorkers) {
    clicksCounter -= precioBunnyWorkers;
    cantidadBunnyWorkers;
    increasePrice("bunnyWorkers", cantidadBunnyWorkers);
    precioBunnyWorkers += precioIncrementalBunnyWorkers;
    moreClick(2, 1000);
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
//Give more clicks to the counter
function moreClick(Quantity, timeDelay) {
  window.setInterval(function() {
    clicksCounter += Quantity;
  }, timeDelay);
}

function labelOwned(label, cantidad) {
  console.log(label);
  document.getElementById(label).innerHTML = "Owned = " + cantidad + "";
}

function increasePrice(itemName, itemQuantity) {
  if (itemQuantity % 10 == 0) {
    if (itemName == "autoClick") {
      precioIncrementalClicks += 10;
    }
    if (itemName == "bunnyWorkers") {
      precioIncrementalBunnyWorkers += 100;
    }
    if (itemName == "truck") {
      precioIncrementalTrucks += 1000;
    }
    if (itemName == "backhoe") {
      precioIncrementalBackhoe += 10000;
    }
  }
}
