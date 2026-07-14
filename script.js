function convert() {
    const value = parseFloat(document.getElementById("value").value);
    const conversion = document.getElementById("conversion").value;
    const result = document.getElementById("result");

    if (isNaN(value)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    let converted;

    if (conversion === "kmToMi") {
        converted = value * 0.621371;
        result.textContent = `${value} km = ${converted.toFixed(2)} miles`;
    } else {
        converted = value / 0.621371;
        result.textContent = `${value} miles = ${converted.toFixed(2)} km`;
    }
}
