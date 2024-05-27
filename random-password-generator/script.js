const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const lowerCaseElment = document.getElementById("lowercase");
const upperCaseElment = document.getElementById("uppercase");
const numberElement = document.getElementById("numbers");
const symbolselement = document.getElementById("symbols");
const generateBtn = document.getElementById("getBtn")  

const lowercaseLetter = "abcdefghijklmanoprstuvwxyz";
const uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*<>?/.,\|`~";


sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () =>{
    sliderValue.textContent = inputSlider.value;
});

generateBtn.addEventListener("click", () =>{
    
    passBox.value = generatePassword();
});

function generatePassword(){

}
