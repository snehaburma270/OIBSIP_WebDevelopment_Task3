function convertTemp() {
  var temp = document.getElementById("temperature").value;
  var unit = document.getElementById("unit").value;
  var resultBox = document.getElementById("result");

  console.log("Input temperature:", temp);
  console.log("Selected unit:", unit);

  if (temp === "") {
    resultBox.textContent = "Enter a temperature value.";
    console.log("No temperature entered.");
    return;
  }

  var input = parseFloat(temp);
  var result = "";

  if (unit === "celsius") {
    var fahrenheit = (input * 9 / 5) + 32;
    var kelvin = input + 273.15;
    result = input + "°C = " + fahrenheit.toFixed(2) + "°F | " + kelvin.toFixed(2) + "K";
    console.log("Converted from Celsius →", result);
  }

  else if (unit === "fahrenheit") {
    var celsius = (input - 32) * 5 / 9;
    var kelvin = celsius + 273.15;
    result = input + "°F = " + celsius.toFixed(2) + "°C | " + kelvin.toFixed(2) + "K";
    console.log("Converted from Fahrenheit →", result);
  }

  else if (unit === "kelvin") {
    var celsius = input - 273.15;
    var fahrenheit = (celsius * 9 / 5) + 32;
    result = input + "K = " + celsius.toFixed(2) + "°C | " + fahrenheit.toFixed(2) + "°F";
    console.log("Converted from Kelvin →", result);
  }

  resultBox.textContent = result;
}
