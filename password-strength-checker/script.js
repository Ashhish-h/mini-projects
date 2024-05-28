const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const submitBtn = document.querySelector("button");

password.addEventListener("input", function (){
    const passwordValue = password.value;
    const passwordLength = passwordValue.length;
    const hasUpperCase = str => /[A-z]/.test(str);
    const hasSpecialChar = str => /[!@#$%^&*(),.?":{}|<>]/.test(str);
    const hasNumber = str => /\d/.test(str);

    let strengthValue = '';
    if(password === 0){
        strengthValue = '';
    } else if(passwordLength < 5){
        strengthValue = 'weak';
    } else if(password.length < 8 && hasUpperCase){
        strengthValue = 'medium';
    } else if(passwordLength > 8 && hasSpecialChar && hasNumber) {
        strengthValue = 'strong';
    }

    strength.textContent = strengthValue;
    message.style.display = "block"  // For displaying message
});

submitBtn.addEventListener("click", function (){
    const passwordType = password.getAttribute("type");

    if(passwordType === 'password'){
        password.setAttribute("type", "text");
    } else {
        password.setAttribute("type", "password");
    }

})