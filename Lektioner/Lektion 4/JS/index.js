let person = {
  name: "Oscar",
  lastName: "Norman",
};

const h3 = document.getElementById("welcomeMessage");

h3.innerText = `Hej ${person.name} ${person.lastName}`;

console.log(person.name.length);

for(let i = 0; i < 5; i++) {
    console.log(i);
}