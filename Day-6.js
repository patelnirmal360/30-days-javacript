//Activity:1 Arrays
//Task-1
let numArr = [1, 2, 3, 4, 5];
for (let i = 0; i < numArr.length; i++) {
  console.log(numArr[i]);
}
//Task-2
let arrFirstLast = [1, 2, 3, 4, 5, 6, 7];
console.log(
  `First Element is${arrFirstLast[0]} and Last Element is ${
    arrFirstLast[arrFirstLast.length - 1]
  }`
);
//Activity:2 Array Methods (Basics)
//Task-3,4,5,6
let operations = [1, 2, 3, 4, 5];
operations.push(33);
console.log(operations);
operations.pop();
console.log(operations);
operations.shift();
console.log(operations);
operations.unshift(9);
console.log(operations);

//Activity:3 Array Methods (Intermediate)
//Task-7
let arrForMap = [1, 2, 3, 4, 5, 6];
let arrMapNew = arrForMap.map((element) => {
  console.log(element * 2);
});
//Task-8
let arrFilter = [12, 23, 34, 45, 56, 67];
let arrFilterNew = arrFilter.filter((element) => {
  return element % 2 == 0;
});
console.log(arrFilterNew);
//Activity-4 :Array Iteration
//Task-10
let itetrateArr = [1, 2, 3, 4, 5];
for (let i = 0; i < itetrateArr.length; i++) {
  console.log(itetrateArr[i]);
}
//Task-11
let arrForEach = [12, 23, 34, 45, 56, 67, 78, 89];
arrForEach.forEach((element) => {
  console.log(element);
});
//Activity-5 : MultiDimentional Arrays
//Task-12
let arrMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arrMatrix);
//Task-13
let ArrMatrixAccess = arrMatrix[0][1];
console.log(ArrMatrixAccess);
