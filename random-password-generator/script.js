const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const lowerCaseElment = document.getElementById("lowercase");
const upperCaseElment = document.getElementById("uppercase");
const numberElement = document.getElementById("numbers");
const symbolsElement = document.getElementById("symbols");
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
    const length = inputSlider.value;
    let characters = "";
    let password = "";
    characters += lowerCaseElment.checked ? lowercaseLetter : "";
    characters += upperCaseElment.checked ? uppercaseLetter : "";
    characters += numberElement.checked ? numbers : "";
    characters += symbolsElement.checked ? symbols : "";

    for(let i = 0; i < length; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
        console.log(password);
    }
    return password;
}
