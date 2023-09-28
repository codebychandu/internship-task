function convertTemperature() {
    const celsiusInput = document.getElementById("celsiusInput");
    const result = document.getElementById("result");

    // Check if the input is a valid number
    if (!isNaN(celsiusInput.value)) {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        result.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
        result.textContent = "Please enter a valid number.";
    }
}

