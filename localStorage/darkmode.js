const toggleButton = document.querySelector("#mode-toggle");
toggleButton.addEventListener("click", switchMode);
function switchMode() {
  document.body.classList.toggle("dark-mode");
  toggleButton.classList.toggle("derk-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Toggle Light Mode";

    localStorage.setItem("mode", "dark");
  } else {
    toggleButton.textContent = "Toggle Dark Mode";

    localStorage.setItem("mode", "light");
  }
}

window.addEventListener("DOMContentLoaded", function(){
    //localStorage cheking

    const saveMode = localStorage.getItem("mode");

    if(saveMode == "dark"){
        document.body.classList.add("dark-mode");
        toggleButton.classList.add("dark-mode");
        toggleButton.textContent = "Toggle Light mode"
    }else {
        toggleButton.textContent = "Toggle Dark mode"

    }
})
