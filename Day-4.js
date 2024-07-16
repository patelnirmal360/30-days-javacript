//Activity: loops
//Task-1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//Task-2
for (let t = 1; t <= 10; t++) {
  console.log(`5 x ${t}=${5 * t}`);
}
//Activity: WhileLoops
//Task-3
let initialization = 1;
let sum = 0;
while (initialization <= 10) {
  sum = sum + initialization;
  initialization++;
}
console.log("sum of number is" + sum);
//Task-4
let endnumber = 11;
while (endnumber > 1) {
  endnumber--;
  console.log(endnumber);
}
//Activity : do while loops
//Task-5
let dw = 0;
do {
  console.log(dw);
  dw++;
} while (dw <= 5);

//Task-6
let fact = 1;
let init = 1;
let n = 5;
do {
  fact *= init;
  init++;
} while (init <= n);
console.log(`factorial is ${fact}`);

//Task-7
for (let i = 1; i <= 5; i++) {
  let star = "";
  for (j = 1; j <= i; j++) {
    star += "* ";
  }
  console.log(star.trim());
}
//Activity: Loop control stamtent
//Task-8
for (i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
//Task-9
for (i = 1; i <= 10; i++) {
  if (i == 10) {
    break;
  }
  console.log(i);
}
