// Activity-1 : Arithmetic Operation
//task-1
let num1 = 10;
let num2 = 20;
console.log(num1 + num2);
//task-2
console.log(num1 - num2);
//task-3
console.log(num1 * num2);
//task-4
console.log(num1 / num2);
//task-5
console.log(num1 % num2);
//ACtivity-2 : Assignment operator

//Task-6
let no = 100;
no += 20;
console.log(no);
//Task-7
let no1 = 100;
no -= 20;
console.log(no);
//Activity 3 : Comparision Operator
//Task-8
let a = 10;
let b = 20;
//Greater than
if (a > b) {
  console.log(`${a} is greater `);
} else {
  console.log(`${b}is greater`);
}
//< opearartor (lessthan)
if (a < b) {
  console.log(`${a} is greater `);
} else {
  console.log(`${b}is greater`);
}

//Task-9
let p = 20;
let q = 100;

if (p <= q) {
  console.log(`${p} is less `);
} else {
  console.log(`${q} is greater than or equal`);
}
//Task-10
if (p >= q) {
  console.log(`${p} is greater `);
} else {
  console.log(`${q} is less than or equal`);
}
//Activity 4: Logical Operators
//Task-11
//&& operator
if ((a = b && a === b)) {
  console.log("both are equal");
} else {
  console.log("both are different");
}

//Task-12
// || operator
if ((a = b || a === b)) {
  console.log("both are equal");
} else {
  console.log("both are different");
}

//Task-13
let notEqual = "";
if (notEqual !== "") {
  console.log("something is there in variable ");
} else {
  console.log("nothing is there in variable");
}
//Activity-5 : Ternary operator
//Task-14
let ter = 10;
let res = ter > 0 ? "positive" : "negative";
console.log(res);
