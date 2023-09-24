
const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = ",;:!?./§µ£¨°=)àç|@$*#^_è\"-('";
const rangValue = document.getElementById("inputConect");
let passwordInput = document.getElementById("gdmp");
const btn = document.getElementById("btn")

// console.log(pas);
// console.log(dataUppercase);
// console.log(uppercase.checked);

function  generatePassword () {
    let data = [];
    let password = "";

    if(lowercase.checked) data.push(...dataLowercase);
    if(uppercase.checked) data.push(...dataUppercase);
    if(number.checked) data.push(...dataNumbers);
    if(simbols.checked) data.push(...dataSymbols);

    
    for (let i = 0; i < rangValue.value; i++) {
        password += data[Math.floor(Math.random() * data.length)];
        
    }

    passwordInput.value = password;
    passwordInput.select();
    document.execCommand("copy");
    // navigator.clipboard.writeText(passwordInput.value);
    btn.textContent = "Copié !"

    setTimeout(() => {
        btn.textContent = "Password generator"
    }, 2000);





}

generatePassword()

btn.addEventListener("click", () => {
    generatePassword()
})



