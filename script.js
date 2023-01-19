let information = [
  (person1 = {
    name: "Noka",
    age: 20,
    adress: "Sarajishvili",
  }),
  (person2 = {
    name: "Andria",
    age: 13,
    adress: "Nutsubidze",
  }),
  (person3 = {
    name: "niki",
    age: 17,
    adress: "saakadze street n37",
  }),
];
console.log(`Ny name is ${person1.name}`);
console.log(`My age is ${person1.age}`);
console.log(`My adress is ${person1.adress}`);

if (person1.age < 19) {
  console.log("I am a teenager");
} else if (person1.age > 19) {
  console.log("I am an adult");
} else {
  console.log("Equals to 19");
}
let numbers = [10, 30, 45, 87, 92];
console.log(numbers);
