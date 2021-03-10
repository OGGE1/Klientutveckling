//document.getElementById("cb").addEventListener(showPassword());

function showPassword() {
  let x = document.getElementById("pass");
  if (x.type == "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
