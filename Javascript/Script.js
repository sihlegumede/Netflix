/*<!-- Sign In ------------------------------------------------------------->*/
let myForm = document.getElementById("my-form");
let email = document.getElementById("email-input");
let password = document.getElementById("psw-input");


myForm.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(email.value ===''|| password.value === ''){
        email.value = '';
        password.value = ''
    }
}

//Password toggle

function showPassword() {
    if(password.type ==="password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
}