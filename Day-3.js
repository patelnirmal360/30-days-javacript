//control Structures
//Activity 1: if-else
//Task-1
let num = 2000;
if (num > 0) {
  console.log("number is positive");
} else {
  console.log("number is negative");
}

//Task-2
let age = 20;
if (age >= 18) {
  console.log("person is eligible for vote");
} else {
  console.log("person is Not eligible for vote");
}

//Activity-2 :nested if-else
//Task-3
let no1 = 10,
  no2 = 30,
  no3 = 40;
if (no1 > no2) {
  console.log(`${no1} is greater`);
} else if (no2 > no3) {
  console.log(`${no2} is greater`);
} else {
  console.log(`${no3} is greater`);
}

//Activity 3 : switch statement
//Task-4
let weekday = 7;
switch (weekday) {
  case 1:
    console.log("Its monday");
    break;
  case 2:
    console.log("Its tuesday");
    break;
  case 3:
    console.log("Its wednesday");
    break;
  case 4:
    console.log("Its thursday");
    break;
  case 5:
    console.log("Its friday");
    break;
  case 6:
    console.log("Its saturday");
    break;
  case 7:
    console.log("Yaahhh!! it's sunday");
    break;
  default:
    console.log("Enter valid date from 1-7");
    break;
}

//Task-5
let marks = 76;
switch (marks) {
  case marks >= 90: {
    console.log("A grade");
    break;
  }
  case marks >= 80: {
    console.log("B grade");
    break;
  }
  case marks >= 70: {
    console.log("C grade");
    break;
  }
  case marks >= 60: {
    console.log("D grade");
    break;
  }
  case marks >= 50: {
    console.log("E grade");
    break;
  }
  case marks >= 40: {
    console.log("Better luck next time");
    break;
  }
}

//Task-6
let numb = 10;
numb % 2 == 0 ? console.log("Number is Even") : console.log("number is odd");

//Activity-5 : Combining operators
//Task-7
let year = 2022;
if (year % 4 == 0) {
  if (year % 100 == 0 && year % 400 == 0) {
    console.log("Leap year");
  } else if (year % 100 == 0 && year % 400 != 0) {
    console.log("Not a leap year.");
  } else {
    console.log("Leap year.");
  }
} else {
  console.log("Not a leap year.");
}
