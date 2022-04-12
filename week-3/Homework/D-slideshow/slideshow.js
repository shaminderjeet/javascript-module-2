// Write your code here
let imageArray = [
    "https://images.unsplash.com/photo-1588767822149-52cae1c6aa60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1588947483736-1e15c38df294?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1588947484346-0de9ed3c6a03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1587613842352-3022a317a088?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  ];
  var farBt = document.getElementById("forward");
  farBt.addEventListener("click", forwardFun);
  
  var bckBt = document.getElementById("backward");
  bckBt.addEventListener("click", backwardFun);
  
  function forwardFun() {
    var imgCntin = document.getElementById("imgHeading").src;
    var indexNum = imageArray.indexOf(imgCntin);
    console.log(indexNum);
    if (indexNum >= 3) {
      indexNum = 0;
    } else {
      indexNum++;
    }
    var imgChange = document.getElementById("imgHeading");
    imgChange.src = imageArray[indexNum];
  }
  
  function backwardFun() {
    var imgCntin = document.getElementById("imgHeading").src;
    var indexNum = imageArray.indexOf(imgCntin);
    console.log(indexNum);
    if (indexNum <= 0) {
      indexNum = 3;
    } else {
      indexNum--;
    }
    var imgChange = document.getElementById("imgHeading");
    imgChange.src = imageArray[indexNum];
  }

  //new
  var delayTimer = document.getElementById("delay").value;
  if (delayTimer === ""){
      delayTimer = 1000;
  }else{
      delayTimer = parseInt(delayTimer)
  }
  //
  var autoForBt = document.getElementById("autoForward");
  autoForBt.addEventListener("click", autoForwardFun);
  
  function autoForwardFun() {
    var i = 0;
    function counter() {
      if (i > 3) {
        clearInterval(id);
      } else {
        let imgChange = document.getElementById("imgHeading");
        imgChange.src = imageArray[i];
        i++;
      }
    }
    //new
    var delayTimer = document.getElementById("delay").value;
  if (delayTimer === ""){
      delayTimer = 1000;
  }else{
      delayTimer = parseInt(delayTimer) * 1000
  }
    var id = setInterval(counter, delayTimer);
  }
  
  var autoBckBt = document.getElementById("autoBackward");
  autoBckBt.addEventListener("click", autoBackwardFun);
  
  function autoBackwardFun() {
    var i = 3;
    function counter() {
      if (i < 0) {
        clearInterval(id);
      } else {
        let imgChange = document.getElementById("imgHeading");
        imgChange.src = imageArray[i];
        i--;
      }
    }
    var delayTimer = document.getElementById("delay").value;
  if (delayTimer === ""){
      delayTimer = 1000;
  }else{
      delayTimer = parseInt(delayTimer) * 1000
  }
    var id = setInterval(counter, delayTimer);
  }

 