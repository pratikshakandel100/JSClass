//Variables type
//let, const,var
//const is block scope and cannot be reasigned
const name = "Unisha";
//name = "Pratiksha" throw error
let age = 30;
age = 31; //Allowed: age can be reassigned
//let age = 31; error
console.log(agee)
var isActive = true; //var is function-scoped and can be reassigned
var isActive = false; // allowed: var can be redeclared and reassigned
if(true){
  const  firstName = "Pratiksha";// blocked scope 
   let lastName = "Kandel"; //blocked scope
   var agee = 21; //function scope
   console.log(firstName);
   console.log(lastName);
   console.log(age);
}



//Datatypes
let fullName = "Pratiksha Kandel";
let numberVar = 18;
let longNumberVar = 12456382;
let undefined;
let nullVar = null;
let symbolVar = Symbol("unique"); //Symbol
let symbolVar2 = Symbol("unique"); //Different symbol, even with the same difference

console.log(symbolVar, typeof symbolVar);

let grade = "A+";

grade === "A+"? console.log("Good"): console.log("Average");

//switch

let day = '4';
switch(day){
  case '1': 
  console.log("Sunday");
  break;
  case '2': console.log("Monday");
  break;
  case '3': console.log("Tuesday");
  break;
  case '4': console.log("Wednesday");
  break;
  case '5': console.log("Thursday");
  break;
  case '6': console.log("Friday");
  break;
  case '7': console.log("Saturday");
  break;
}

let num1 = 5;
let num2 = "5";
console.log(num1 === num2);


//Object
//JSON -> Js object notation
const details = {
  name : "Pratiksha Kandel",
  class: 10,
  rollNo: 25,
  hobbies: ["reading", "dancing", "singing"],
  address: {
    city: "Kathmandu",
    countyr: "Nepal"
  }
}

console.log(details);
console.log(details.name);
console.log(details["rollNo"])
console.log(details.hobbies[2]);
details.rollNo = 15;
console.log(details)



const stu1 = {
  name: "Ram",
  age: 20,
  score: 85
}

const stu2 = {
  name: "Shyam", 
  age: 22,
  
}