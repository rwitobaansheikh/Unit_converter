const inputValue = document.getElementById("input_value");
const lengthResult = document.getElementById("length_result");
const volumeResult = document.getElementById("volume_result");
const massResult = document.getElementById("mass_result");
const convertBtn = document.getElementById("convert_button");

//20 meters = 65.616 feet | 20 feet = 6.096 meters

convertBtn.addEventListener("click", function(){
    const value=Number(inputValue.value);
    const metersToFeet = (value * 3.28084).toFixed(3);
    const feetToMeters = (value / 3.28084).toFixed(3);
    lengthResult.innerHTML+=`${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;

    const litersToGallons = (value * 0.264172).toFixed(3);
    const gallonsToLiters = (value / 0.264172).toFixed(3);
    volumeResult.innerHTML+=`${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;

    const kilosToPounds = (value * 2.20462).toFixed(3);
    const poundsToKilos = (value / 2.20462).toFixed(3);
    massResult.innerHTML+=`${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos`;
})
