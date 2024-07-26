/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

const inputValue = document.getElementById('inputValue');
const convertButton = document.getElementById("convert");
const lengthResult = document.getElementById("lengthResult")
const volumeResult = document.getElementById("volumeResult")
const massResult = document.getElementById("massResult")

convertButton.addEventListener("click", function() {

  convertMetrics()

})

function convertMetrics () {
  const meter = 3.281
  const liter = 0.264
  const kilogram = 2.204
  const value = inputValue.value
  lengthResult.innerHTML = `${value} meters = ${(value * meter).toFixed(2)} feet | ${value} feet = ${(value / meter).toFixed(2)} meters`

  volumeResult.innerHTML = `${value} liters = ${(value *liter).toFixed(3)} gallons | ${value} gallons = ${(value /liter).toFixed(3)} liters`

  massResult.innerHTML = `${value} kilos = ${(value * kilogram).toFixed(3)} pounds | ${value} pounds = ${(value / kilogram).toFixed(3)} kilos`

  
}
