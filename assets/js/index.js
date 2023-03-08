var email = document.forms['form']['email'];
var password = document.forms['form']['password'];
var repeatpassword = document.forms['form']['repeatpassword']
var username = document.forms['form']['username']

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');
var pass_error2 = document.getElementById('pass_error2');
var username_error = document.getElementById('username_error');
email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);
repeatpassword.addEventListener('textInput', pass_Verify2);
username.addEventListener('textInput', username_verify);

function validated(){
    if (username.value.length < 4) {
        username.style.border = "1px solid red";
        username_error.style.display = "block";
        username.focus();
        return false;
    }
    if (username.value.length < 4) {
        username.style.border = "1px solid red";
        username_error.style.display = "block";
        username.focus();
        return false;
    }
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
    if (password.value != repeatpassword.value) {
        repeatpassword.style.border = "1px solid red";
        pass_error2.style.display = "block";
        repeatpassword.focus();
        return false;
    }
}
function email_Verify(){
    if (email.value.length >= 8) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}
function pass_Verify(){
    if (password.value.length >= 6) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}
function pass_Verify2(){
    if (password.value != repeatpassword.value) {
        repeatpassword.style.border = "1px solid silver";
        pass_error2.style.display = "none";
        return true;
    }
}

function username_verify() {
    if (username.value.length >= 4) {
        username.style.border = "1px solid silver";
        username_error.style.display = "none";
        return true;
    }
}
