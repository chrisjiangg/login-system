//validation
var createemailerror = document.getElementById('email-error');
var createpassworderror = document.getElementById('password-error');
var createerror = document.getElementById('create-error');
var signinemailerror = document.getElementById('signinemail-error');
var signinpassworderror = document.getElementById('signinpassword-error');
var signinerror = document.getElementById('signin-error');

function validatecreateEmail(){
    var createemail = document.getElementById('createaccountemail').value.trim();
    if(createemail.length == 0){
        createemailerror.innerHTML = 'Email is required';
        return false;
    }
    createemailerror.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatecreatePassword(){
    var createpassword = document.getElementById('createaccountpassword').value.trim();
    if(createpassword.length <7){
        createpassworderror.innerHTML = 'Password must be at least 8 characters';
        return false;
    }
    createpassworderror.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

//visual when you switch between sign in and create account
const signUpButton = document.getElementById('createAccount'),
signInButton = document.getElementById('signIn'),
container = document.getElementById('container');
signUpButton.addEventListener('click',()=>{
    container.classList.add('right-panel-active');
});
signInButton.addEventListener('click',()=>{
    container.classList.remove('right-panel-active');
});
let email;
let password;
const database = [];
//runs function when the create account button is clicked
function Userinfo(){
    email = document.getElementById('createaccountemail').value.trim();
    password = document.getElementById('createaccountpassword').value.trim();
    //validating account creation info
    if(!validatecreateEmail() || !validatecreatePassword()){
        createerror.style.display = 'block';
        createerror.innerHTML = 'Please fill/fix the required fields';
        setTimeout(function(){createerror.style.display = 'none'}, 2000);
        return false;
    }
    database.push(email);
    database.push(password);
    alert("ACCOUNT SUCESSFULLY CREATED!");
    console.log(database);
}