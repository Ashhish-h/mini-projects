// fetching the elements of the html code
const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const lowerCaseElment = document.getElementById("lowercase");
const upperCaseElment = document.getElementById("uppercase");
const numberElement = document.getElementById("numbers");
const symbolsElement = document.getElementById("symbols");
const generateBtn = document.getElementById("getBtn");
const copyIcon = document.getElementById("copyIcon"); 

// declaring and initilizing the values that will be used to generate password
const lowercaseLetter = "abcdefghijklmanoprstuvwxyz";
const uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*<>?/.,\|`~";

// changing the value of slider to set the length of the password
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () =>{
    sliderValue.textContent = inputSlider.value;
});

// showing password in the input field
generateBtn.addEventListener("click", () =>{
    passBox.value = generatePassword();
});


// Generate password
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


// eventListner to copy the password whenever we click on the copyIcon
copyIcon.addEventListener("click", ()=>{
    if(passBox.value != "" || passBox.value.length >= 8){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        setTimeout(() =>{
            copyIcon.innerHTML = "content_copy";
        }, 3000);
    }
});