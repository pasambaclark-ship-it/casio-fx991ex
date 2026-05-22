let display = document.getElementById("display");

let isRadian = true;
function pressRad() {
  isRadian = !isRadian;
  if (isRadian) {
    display.innerText = "RAD";
  } else {
    display.innerText = "DEG";
  }
}
function pressButton (value) {
  if (display.innerText== "0") {
    display.innerText = value;
  } else{
    display.innerText = display.innerText + value;

  }
}

function calculate() {
    let result = eval(display.innerText);
    display.innerText = result;
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    if (display.innerText.length === 1) {
        display.innerText = "0";
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
    } 

function pressSqrt() {
  let result = Math.sqrt(eval(display.innerText));
  display.innerText = result;
}

function pressLog() {
    let result = Math.log(eval(display.innerText));
    display.innerText = result;
}

function pressLog10(){
   let result = Math.log10(eval(display.innerText));
   display.innerText = result;
}

function pressSin() {
    let result = Math.sin(eval(display.innerText));
    display.innerText = result;
}

function pressCos () {
    let result = Math.cos(eval(display.innerText));
    display.innerText = result;
}

function pressTan() {
    let result = Math.tan(eval(display.innerText));
   display.innerText = result;
}

function pressAcos() {
  let result = Math.acos(eval(display.innerText));
  display.innerText = result;
}

function pressAsin() {
  let result = Math.asin(eval(display.innerText));
  display.innerText = result;
}

function pressAtan() {
  let result = Math.atan(eval(display.innerText));
  display.innerText = result;
}

function pressSinh() {
  let result = Math.sinh(eval(display.innerText));
  display.innerText = result;
}

function pressCosh() {
  let result = Math.cosh(eval(display.innerText));
  display.innerText = result;
}

function pressTanh() {
  let result = Math.tanh(eval(display.innerText));
  display.innerText = result;
}


function pressAbs() {
  let result = Math.abs(eval(display.innerText));
  display.innerText = result;
}

function pressMod() {
  let a=  eval(display.innerText.split("%")[0]);
  let b = eval(display.innerText.split("%")[1]);
  display.innerText = a % b;
}

