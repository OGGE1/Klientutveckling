var datum = new Date();

function setDate() {
  document.getElementById(
    "datum"
  ).innerHTML = `Onsdagen den ${datum.getDay()} mars ${datum.getFullYear()}`;
}
setDate();
