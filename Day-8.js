//Activity : Template literals
//Task-1
let personName = "Nirmal";
let personAge = 21;
let result = `The name of person is ${personName} and age is ${personAge}`;
console.log(result);
//Task-2
let multiString = `Offbeat Love Stories and More
Butterfly Weeds  	
Somebody Everybody Listens To  
The Secrets of the Starbucks Lovers `;
console.log(multiString);
//Activity-2 : Destructuring
//Task-3
let arrayDes = [10, 20, 30, 40];
let = [num1, num2, num3, num4] = arrayDes;
console.log(num1, num2, num3, num4);
//Task-4
let bookObj = {
  title: "book1",
  author: "book1author",
  year: 2024,
};
mybook(bookObj);
function mybook({ title, author, year }) {
  console.log(
    "my name is " +
      author +
      "my book name is" +
      title +
      "and my book release year is" +
      year
  );
}
//Activity: 3 Spread and rest operator
//Task-5
let spArray = [1, 2, 3, 4, 5];
let spArray1 = ["Audi", "RangeRover", "Mercedes", "BMW"];
let newArray = [...spArray, ...spArray1];
console.log(newArray);

//Activity: 4 Default Parameters
//Task-7
function mul(num1, num2 = 3) {
  let result = num1 * num2;
  console.log(result);
}
mul(10);
//Activity: 5 Enhanced object literals
//Task-8
let namee = "nirmal";
let age = 21;
let luckynumber = 1;
function getdetails() {
  `my name is ${this.namee} and i am ${this.age} years old and my lucky number is ${this.luckynumber}`;
}
let EnhObj = {
  namee,
  age,
  luckynumber,
  getdetails,
};
console.log(EnhObj);
console.log(getdetails);
