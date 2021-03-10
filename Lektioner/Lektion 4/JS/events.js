let isPressed = false;
function callMyFunction() {
  if (!isPressed) {
    document.getElementById("demo").innerText = "Hello Events!";
    isPressed = true;
  } else if (isPressed) {
    document.getElementById("demo").innerText = "";
    isPressed = false;
  }
}

// Arbete med lyssnare
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", callMyFunction);
