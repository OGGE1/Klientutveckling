function userPrompt() {
  let minutes = prompt("Hur många minuter pratar du i telefonen");
  let cost = prompt("Hur mycket kostar det i minuten?");

  alert("Det kostar " + calculate(minutes, cost) + " kronor");
}

function calculate(minutes, cost) {
  return minutes * cost;
}

userPrompt();
