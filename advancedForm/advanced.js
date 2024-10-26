const form = document.querySelector("#registrationForm");

const username = document.querySelector("#username");

const email = document.querySelector("#email");

const password = document.querySelector("#password");

const confirmPassword = document.querySelector("#confirmPassword");

const error = document.querySelector("#error");
const success = document.querySelector("#success");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  error.textContent = "";
  success.textContent = "";

  const isUsernameValid = validateUsername();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();

  if (!isUsernameValid) {
    username.focus();
    return;
  } else if (!isEmailValid) {
    email.focus();
    return;
  } else if (!isPasswordValid) {
    password.focus();
    return;
  }else if (!isConfirmPasswordValid){
    confirmPassword.focus();
    return
  }

  success.textContent = "registration is successfully registered";
});
/////////////////////////////usename
function validateUsername() {
  if (username.value.trim() === "") {
    //error
    setError(username, "username is required");
    return false;
  } else {
    //success
    setSuccess(username);
    return true;
  }
}
///////////////////////////email
function validateEmail() {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email.value.match(emailPattern)) {
    setError(email, "invalid email");
    return false;
  } else {
    setSuccess(email);
    return true;
  }
}
/////////////////////////////////password

function validatePassword() {
  if(password.value.length < 8) {
    setError(password, "password must be at least 8 characters");
    return false;
  } else {
    setSuccess(password);
    return true;
  }
}

/////////////confirmPassword

function validateConfirmPassword(){


    if (password.value.trim() === ""|| confirmPassword.value.trim() === ""){
        setError(confirmPassword, "password must be same");
        return false;
    }

    if(password.value !== confirmPassword.value){
        setError(confirmPassword, "password must be same");
        return false
    }else{
        setSuccess(confirmPassword);
        return true;
    }
}

function setError(element, message) {
  element.classList.add("invalid");
  element.classList.remove("valid");

  error.textContent = message;
}

function setSuccess(element) {
  element.classList.add("valid");
  element.classList.remove("invalid");
}
