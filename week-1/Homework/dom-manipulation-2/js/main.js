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

const submitbuton = document.querySelector("button[type=submit]")
submitbuton.addEventListener("click",event => {
    event.preventDefault();
    const inputName = document.getElementById("example-text-input")
    const emailAddress = document.getElementById("exampleInputEmail1")
    const describeYourSelf = document.getElementById("exampleTextarea")
    if(inputName.value.length > 0 && emailAddress.value.length > 0 && emailAddress.value.includes("@") && describeYourSelf.value.length>0){
     alert("thanku for filling the form")
    }
     else{
       inputName.style.backgroundColor="red";
       emailAddress.style.backgroundColor="red";
       describeYourSelf.style.backgroundColor="red";
        }
      
     }
        
     
)