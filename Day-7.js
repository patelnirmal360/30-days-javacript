//Activity-1 : object Creation and access
//Task-1
let objBook = {
  title: "Power of subconsious mind",
  author: "Dr. jospeh murphy",
  year: 1994,
  info: function Info() {
    console.log(objBook.title);
    console.log(objBook.author);
  },
};
console.log(objBook);
//Task-2
console.log(objBook.title);
console.log(objBook.author);

//Activity-2 :Object Methods
//Task-3
objBook.getInfo = function () {
  return `${this.title} by ${this.author}`;
};
console.log(objBook.getInfo());

//Task-4
objBook.addYear = function (year) {
  this.year = year;
};
objBook.addYear(2020);
console.log(objBook);

//Activity-3 : Nested Objects
//Task-5

let library = {
  name: "nirmal's lib",
  books: [
    { name: "Javascript", author: "nirmal", year: 1999 },
    { name: "webdevelopment", author: "HC", year: 2020 },
  ],
};
console.log(library);
//Task-6
console.log(library.name);
library.books.forEach((element) => {
  console.log(element.name);
});

//Activity-4 : using this keyword
//Task-7
objBook.infoUsingThis = function () {
  return `Title is ${this.title} and Author is  ${this.author}`;
};
console.log(objBook.infoUsingThis());
