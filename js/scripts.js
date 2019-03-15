//Elements
const img = document.getElementById("clickImage");
const counter = document.getElementById("counter");
const labelPrecioClicks = document.getElementById("labelPrecioClicks");
const labelOwnedClicks = document.getElementById("labelOwnedClicks");
const buttonComprarClicks = document.getElementById("buttonComprarClicks");
const labelPrecioBunnyWorkers = document.getElementById(
  "labelPrecioBunnyWorkers"
);
const labelOwnedBunnyWorkers = document.getElementById(
  "labelOwnedBunnyWorkers"
);
const buttonComprarBunnyWorkers = document.getElementById(
  "buttonComprarBunnyWorkers"
);
const labelPrecioTrucks = document.getElementById("labelPrecioTrucks");
const labelOwnedTrucks = document.getElementById("labelOwnedTrucks");
const buttonComprarTrucks = document.getElementById("buttonComprarTrucks");
const labelPrecioBackhoe = document.getElementById("labelPrecioBackhoe");
const labelOwnedBackhoe = document.getElementById("labelOwnedBackhoe");
const buttonComprarBackhoe = document.getElementById("buttonComprarBackhoe");

//Events
img.addEventListener("click", clickImage);
buttonComprarClicks.addEventListener("click", comprarclicks);
buttonComprarBunnyWorkers.addEventListener("click", comprarbunnyworkers);
buttonComprarTrucks.addEventListener("click", comprartrucks);
buttonComprarBackhoe.addEventListener("click", comprarbackhoe);

//Counter the clicks
var clicksCounter = 100000; //Start at 0

//Incremental price
var precioIncrementalClicks = 10;
var precioIncrementalBunnyWorkers = 100;
var precioIncrementalTrucks = 1000;
var precioIncrementalBackhoe = 10000;

//Original prices
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
  if (isPurchasable(precioClicks)) {
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
    if (isPurchasable(precioBunnyWorkers)) {
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
    if (isPurchasable(precioTrucks)) {
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
    if (isPurchasable(precioBackhoe)) {
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

function isPurchasable(itemPrice) {
  return clicksCounter >= itemPrice ? true : false;
}

function updateLabelsInfo(item, labelInfoBuy, labelInfoOwned, quantity, price) {
  labelInfoBuy.innerHTML = "Buy " + item + " by " + price + " clicks";
  labelInfoOwned.innerHTML = "Owned = " + quantity + "";
}

function increasePrice(itemName, itemQuantity) {
  if (itemQuantity % 10 == 0) {
    switch (itemName) {
      case "autoClick":
        precioIncrementalClicks += 10;
        break;
      case "bunnyWorkers":
        precioIncrementalBunnyWorkers += 100;
        break;
      case "truck":
        precioIncrementalTrucks += 1000;
        break;
      case "backhoe":
        precioIncrementalBackhoe += 10000;
        break;
    }
  }
}
