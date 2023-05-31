// function than handle onhovering through the project section
var myDropdown = document.getElementsByClassName("my-dropdown");
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  console.log(myDropdown);
}

// function that handle transition
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".container").classList.add("animate");
});
