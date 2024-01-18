let array = [1, "Harsh", "shivam", "shashank", "snehasis", 2];

//1. For loop

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//2. While Loop

let count = 0;
while (count < array.length) {
  console.log(array[count]);
  count++;
}

//3. DO-WHILE Loop (execute atleast one time)

let count2 = 0;
do {
  console.log("hi");
  count2++;
} while (count2 < 5);

//4. for..in loop

let person = {
  name: "Harshit",
  age: 20,
  degree: "B.Tech",
};

for (const key in person) {
  console.log(person[key]);
  console.log(key);
}

//OBJECT

let car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  isElectrical: false,
  start: function () {
    console.log("Engine Started");
  },
};
car.start();

//OBJECT CONSTRUCTOR

function book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
book("PYTHON", "HARSHIT", 2000);
console.log(book.title);

//ARRAY

let array2 = [1, "apple", "Banana", "Pineapple"];
console.log(array2.length);
console.log(array2);