//Activity-1 :Function Declaration
//Task-1

function evenOdd(num) {
  if (num % 2 == 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
}
evenOdd(6);

//Task-2
function sqr(num) {
  let sqr = num * num;
  console.log(sqr);
}
sqr(12);

//Activity-2 :Function Expression
//Task-3
let max = function (no1, no2) {
  if (no1 > no2) {
    console.log(`${no1} is maximum`);
  } else {
    console.log(`${no2} is maximum`);
  }
};
max(34, 20);

//Task-4
let concatination = function (str1, str2) {
  let concat = str1 + str2;
  console.log(concat);
};
concatination("hello", "world");

//Activity: 3: Arrow Functions

//Task-5
let arrow = (n1, n2) => {
  let res = n1 + n2;
  console.log(res);
};
arrow(20, 10);

//Task-6
let stringContains = (str, check) => {
  let find = str.includes(check);
  console.log(find);
};
stringContains("Nirmal", "i");
//It will return true because i is present in string

//Activity-4 : Function parameters and default values
//Task-7
function product(a, b = 10) {
  console.log(a * b);
}
product(4);

//Task-8
function greet(name, age = 21) {
  let greet = `Hello ${name} Welcome. your age is ${age}`;
  console.log(greet);
}
greet("nirmal");

//Activtiy-5 : Higher Order Function
//Task-9
function hello() {
  console.log("Hello");
}
let HOFsum = (func, n) => {
  for (let i = 1; i <= n; i++) {
    func();
  }
};
HOFsum(hello, 6);

//Task-10
const callBack1 = (val) => {
  return val ** 2;
};

const callBack2 = (callFunc) => {
  return callFunc * ss * 2 * 10;
};

const higherOrderFunc = (func1, func2, val) => {
  return func2(func1(val));
};

console.log(higherOrderFunc(callBack1, callBack2, 5));
