//Activity 1 : Variable Declaration
//Task-1
var num = 10;
console.log(num);
//Task-2
let text = "Hello";
console.log(text);
//Activity-2 : Constant Declaration
//Task-3
const bool = true;
console.log(bool);
//Activity-3 : Data types
//Task-4
var no = 10; //number
console.log(typeof no);

let bln = true; //Boolean
console.log(typeof bln);

var txt = "nirmal"; //string
console.log(typeof txt);

//object
let obj = {
  name: "nirmal",
  age: 21,
};
console.log(typeof obj);

//array
var arr = [1, 2, 3, 4, 5];
console.log(typeof arr);

//Activity-4 :Reassigning Variables
//Task-5

let value = 10;
console.log(value);
value = 20;
console.log(value);
//I learnt that  let can be reassigned.

//Activity-5 :Understanding Const
//Task-6
// const a = 10;
// console.log(a);
// a = 20;
// console.log(a);
//Const cannot be reassigned

//Feature Request
//1
function valueAndItsTypes(value) {
  console.log(value, typeof value);
}
valueAndItsTypes(10);

//2 Reassignment Demo

let first = 10;
const one = 10;
console.log(first, one);
//Reassignment of variables
first = 20;
console.log(first);
//Cannot be Reassigned
one = 20;
console.log(one);
//what i learned?

/* let and var can be reassigned and const cannot be reassign and to see type of any data typeof() is used*/
