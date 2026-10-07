function convertTemperature() {

    const temperature = document.getElementById("temperature").value;
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const result = document.getElementById("result");

    // Check if input is empty
    if (temperature === "") {
        result.textContent = "Please enter a temperature.";
        return;
    }

    let value = Number(temperature);

    // Absolute zero validation
    if (fromUnit === "celsius" && value < -273.15) {
        result.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    if (fromUnit === "fahrenheit" && value < -459.67) {
        result.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    if (fromUnit === "kelvin" && value < 0) {
        result.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    let celsius;

    // Convert input to Celsius
    if (fromUnit === "celsius") {
        celsius = value;
    } 
    else if (fromUnit === "fahrenheit") {
        celsius = (value - 32) * 5 / 9;
    } 
    else if (fromUnit === "kelvin") {
        celsius = value - 273.15;
    }

    let converted;

    // Convert Celsius to selected unit
    if (toUnit === "celsius") {
        converted = celsius;
    } 
    else if (toUnit === "fahrenheit") {
        converted = (celsius * 9 / 5) + 32;
    } 
    else if (toUnit === "kelvin") {
        converted = celsius + 273.15;
    }

    result.textContent =
        `${converted.toFixed(2)} ${getUnitSymbol(toUnit)}`;
}


function getUnitSymbol(unit) {

    if (unit === "celsius") {
        return "°C";
    }

    if (unit === "fahrenheit") {
        return "°F";
    }

    if (unit === "kelvin") {
        return "K";
    }
}
