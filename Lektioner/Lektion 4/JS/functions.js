// En parameterlös funktion
function demo1() {
  console.log("Demo 1");
}

// En funktion med en parameter
function demo2(username) {
  if (username == undefined) {
    username = "potatis";
  }
  console.log("Hello " + username);
}
// Anrop utan några argument
demo1();
demo2();

// Anropa med ett argument
demo2("Oscar");

// Anrop med flera argument
demo2("Oscar", "TEST", "TEST"); //WEIRD

// En funktion som returnerar data
function demo3(firstname, lastname) {
  return `Hello ${firstname} ${lastname}`;
}

let fullName = demo3("Oscar", "Norman");

console.log(fullName);

// Förvald parameter
function demo4(username = "Guest") {
  console.log("Hej " + username);
}
demo4(); //Hej Guest
demo4("Oscar"); //Hej Oscar

//demo5(); //ReferenceError: Cannot access 'demo5' before initialization

//Funktionsuttryck
const demo5 = function () {
  console.log("DEMO 5");
};

demo5();

// En funktion som returnerar en Array
function demo6() {
  const array = [1, 2, 3, 4, 5];
  return array;
}

console.log(demo6());

// En funktion som returnerar ett objekt
function demo7() {
  const myObject = {
    name: "Oscar",
    lastName: "Norman",
  };
  return myObject;
}

console.log(demo7());

// Varför kan vi skicka flera argument till en parameterlös funktion
function demo8() {
  // Svar: Det finns ett objekt som tar emot alla argument
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

demo8("Arg1", "Arg2", "Arg3");
// [Arguments] { '0': 'Arg1', '1': 'Arg2', '2': 'Arg3' }

// ES6 (ES2015) - Arrow Functions (pilfunktioner)
//let demo9 = function(){
//
//};
let demo9 = (username) => {
    console.log("Hello " + username);
};

demo9("Oscar");

let demo10 = (username) => console.log("Hello " + username);

demo10("Anders");