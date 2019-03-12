//Get elements
var img = document.getElementById("clickImage");
var counter = document.getElementById("counter");
var labelPrecioClicks = document.getElementById("labelPrecioClicks");
var labelOwnedClicks = document.getElementById("labelOwnedClicks");
var buttonComprarClicks = document.getElementById("buttonComprarClicks");

var labelPrecioBunnyWorkers = document.getElementById(
  "labelPrecioBunnyWorkers"
);
var labelOwnedBunnyWorkers = document.getElementById("labelOwnedBunnyWorkers");
var buttonComprarBunnyWorkers = document.getElementById(
  "buttonComprarBunnyWorkers"
);

var labelPrecioTrucks = document.getElementById("labelPrecioTrucks");
var labelOwnedTrucks = document.getElementById("labelOwnedTrucks");
var buttonComprarTrucks = document.getElementById("buttonComprarTrucks");

var labelPrecioBackhoe = document.getElementById("labelPrecioBackhoe");
var labelOwnedBackhoe = document.getElementById("labelOwnedBackhoe");
var buttonComprarBackhoe = document.getElementById("buttonComprarBackhoe");

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
  counter.innerHTML = "This has been clicked " + clicksCounter + " times.";
}

//Buy a Auto click
function comprarclicks() {
  if (clicksCounter >= precioClicks) {
    clicksCounter -= precioClicks; //Baja el numero de clicks disponibles
    cantidadAutoclick += 1; //aumenta la cantidad de Autoclicks obtenidos
    increasePrice("autoClick", cantidadAutoclick); //aumenta el precio incrementable
    precioClicks += precioIncrementalClicks; //precio base += el precio aumentado
    autoClick(1, 1000); //activa que se ejecute el auto click cada 1 segundo
    updateLabelsInfo(
      "Auto Clicks",
      labelPrecioClicks,
      labelOwnedClicks,
      cantidadAutoclick,
      precioClicks
    );
    updateCounter();
    messageIT("Clicks", 3000); //mensaje con izitoast
    comproAutoclicks = true;
  }
}

function comprarbunnyworkers() {
  if (comproAutoclicks) {
    if (clicksCounter >= precioBunnyWorkers) {
      clicksCounter -= precioBunnyWorkers;
      cantidadBunnyWorkers += 1;
      increasePrice("bunnyWorkers", cantidadBunnyWorkers);
      precioBunnyWorkers += precioIncrementalBunnyWorkers;
      autoClick(2, 1000);
      updateLabelsInfo(
        "Bunny Workers",
        labelPrecioBunnyWorkers,
        labelOwnedBunnyWorkers,
        cantidadBunnyWorkers,
        precioBunnyWorkers
      );
      updateCounter();
      messageIT("Bunny Workers", 3000);
      comproBunnyWorkers = true;
    }
  }
}

function comprartrucks() {
  if (comproBunnyWorkers) {
    if (clicksCounter >= precioTrucks) {
      clicksCounter -= precioTrucks;
      cantidadTrucks += 1;
      increasePrice("truck", cantidadTrucks);
      precioTrucks += precioIncrementalTrucks;
      autoClick(4, 1000);
      updateLabelsInfo(
        "Trucks",
        labelPrecioTrucks,
        labelOwnedTrucks,
        cantidadTrucks,
        precioTrucks
      );
      updateCounter();
      messageIT("Trucks", 3000);
      comproTrucks = true;
    }
  }
}

function comprarbackhoe() {
  if (comproTrucks) {
    if (clicksCounter >= precioBackhoe) {
      clicksCounter -= precioBackhoe;
      cantidadBackhoe += 1;
      increasePrice("backhoe", cantidadBackhoe);
      precioBackhoe += precioIncrementalBackhoe;
      autoClick(500, 1000);
      updateLabelsInfo(
        "Backhoe",
        labelPrecioBackhoe,
        labelOwnedBackhoe,
        cantidadBackhoe,
        precioBackhoe
      );
      updateCounter();
      messageIT("Backhoe", 3000);
      comproTrucks = true;
    }
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

//Auto click
function autoClick(Quantity, timeDelay) {
  window.setInterval(function() {
    clicksCounter += Quantity;
    updateCounter();
  }, timeDelay);
}

function updateLabelsInfo(
  item,
  labelInfoBuy,
  labelInfoOwned,
  cantidad,
  precio
) {
  labelInfoBuy.innerHTML = "Buy " + item + " by " + precio + " clicks";
  labelInfoOwned.innerHTML = "Owned = " + cantidad + "";
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
