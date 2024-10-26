const form = document.querySelector("#registrationForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.querySelector("#username").value;

  const email = document.querySelector("#email").value;

  const password = document.querySelector("#password").value;

  const confirmPasseord = document.querySelector("#confirmPassword").value;

  const error = document.querySelector("#error");

  //cheking username

  if (username === ""){
    error.textContent = "Username must be provided";
    return
  };

   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   if (!email.match(emailPattern)){
    error.textContent = "please enter a valid email address";
    return
   }

   if (password.length < 8){
    error.textContent = "password must be at least 8 characters";
    return
   }

   if (password !== confirmPasseord){
    error.textContent = "password do not match"
    return
   }

error.textContent = "successfully registered";

});
