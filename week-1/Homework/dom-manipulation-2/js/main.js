const blueBtn = document.getElementById("blueBtn")
blueBtn.addEventListener("click",event => {
const jumbotron = document.querySelector(".jumbotron")
jumbotron.style.backgroundColor='#588fbd'
const donateAbike=document.querySelector(".jumbotron .buttons .btn.btn-primary.btn-lrg")
donateAbike.style.backgroundColor='#ffa500'
const volunteer=document.querySelector(".jumbotron .buttons .btn.btn-secondary.btn-lrg")
volunteer.style.backgroundColor='black';
volunteer.style.color='white';
})

const orangeBtn = document.getElementById("orangeBtn")
orangeBtn.addEventListener("click",event => {
const jumbotron = document.querySelector(".jumbotron")
jumbotron.style.backgroundColor='#f0ad4e'
const donateAbike=document.querySelector(".jumbotron .buttons .btn.btn-primary.btn-lrg")
donateAbike.style.backgroundColor='#5751fd'
const volunteer=document.querySelector(".jumbotron .buttons .btn.btn-secondary.btn-lrg")
volunteer.style.backgroundColor='#31b0d5';
volunteer.style.color='white';
})
const greenbtn = document.getElementById("greenBtn")
greenbtn.addEventListener("click",event => {
const jumbotron = document.querySelector(".jumbotron")
jumbotron.style.backgroundColor='#87ca8a'
const donateAbike=document.querySelector(".jumbotron .buttons .btn.btn-primary.btn-lrg")
donateAbike.style.backgroundColor='black'
const volunteer=document.querySelector(".jumbotron .buttons .btn.btn-secondary.btn-lrg")
volunteer.style.backgroundColor='8c9c08';

})

const submitButton = document.querySelector("form button");
submitButton.addEventListener("click", function () {
  const allInputs = document.querySelectorAll("form input,textarea");
  let allInputsValid = true;
  allInputs.forEach(function (el) {
    if (el.value === "" || (el.type === "email" && !el.value.includes("@"))) {
      el.style.backgroundColor = "red";
      allInputsValid = false;
    }
  });
  if (allInputsValid) {
    alert("Thank you!");
    allInputs.forEach(function (el) {
      el.value = "";
    });
  }
});