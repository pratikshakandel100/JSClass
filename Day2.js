//function

function hello(){
    console.log("hello worls")
}
hello()
let sub = function(a,b){
    return a-b;
}
console.log(sub(5,3))
let sum = (a,b)=>{
    return a+b;
}
console.log(sum(5,3))



//difference

function addition(a,b,c){
    return a+b+c;
}
var result = addition(2,3,4);
console.log(result);

const subtract = (a,b) => a-b;

var result = subtract(5,3);

const person = {
    firstName: "Pratiksha Kandel",
    age: 15,
    details: function(){
        return this.firstName + "age is " + this.age;
    },
    arrowDetails: () =>{
        return this.firstName + " age is " + this.age;
    }
    }


console.log(person.details());
console.log(person.arrowDetails());


//destructuring
const {firstName, age} = person;
console.log(firstName, age)

const{firstName: fName, age : a} = person;
console.log(fName, a); // renaming


//callback and closures

function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log("Count:", count);
    }
    return inner;
}

const counter1 = outer(); //counter1 is inner function
counter1(); //Count: 1
counter1(); //Count: 2

const counter2 = outer(); //resets count is 0 for counter2

//callback, high order function
function greet(name, callback){
    callback(name);
}

function sayHello(name){
    console.log("Hello, " + name);
}

greet("Ram", sayHello);
greet("Ram", (name)=>{console.log("Hello "+ name)})
greet("Ram", (name)=>{console.log("Whatsapp " + name)});


function calculate( a,  b, callback){
    callback(a,b);
}

function addition(a,b){
    console.log(a+b); 
}
function subtraction(a,b){
     console.log(a-b);
}
function multiplication(a,b){
    console.log(a*b);
}
function division(a,b){
     console.log(a/b);
}
calculate(5,8,addition);
calculate(10,5,subtraction);
calculate(10,5,multiplication);
calculate(10,5,division);


//List iterator and callbacks
const fruits = ["apple", "mango", "pineapple", "Avogado"];

fruits.forEach(
    //callback function
    (fruit,index) => console.log(index + ": " + fruit)
)
fruits.forEach((fruit)=> console.log(fruit.toUpperCase()));

//map
let newFruit = fruits.map((fruit)=>{return fruit.toLowerCase()})
console.log(newFruit)

const newFruits = fruits.map((fruit, index)=>{
   return `<li id = "${index}>${fruit}</>`
})
console.log(newFruits)

const filterFruit = fruits.filter((fruit)=>{
    if(fruit.length>6){
        return fruit
    }
})
console.log(filterFruit)

const reduceFruit = fruits.reduce((count)=> count+1)
console.log(reduceFruit)