//CRUD
let arr1=[1,2,3]
//spread operator".."
let arr2=[4,5,6]
let arr3=[arr1,arr2]
let arr4=[...arr1,...arr2]//unpack and make new array
 
console.log(arr3)
console.log(arr4)
 
let arr5=[...arr1,5,6,...[7,8]]
console.log(arr5)
 
//destructe spread
const [num1,num2,...rest]=arr5;
console.log(num1,num2,rest)
 
//spread in object
let obj1= {name:"Ram",age:20}
obj1={
    ...obj1,
    grade:"A",
    lastname:"Bahadur",
    isActive:true
}
console.log(obj1)
 
 
let students=[
    {id:1,name:"Ram",grade:60},
     {id:2,name:"Shyam",grade:60},
     {id:3,name:"Hari",grade:60}
]
//create
students.push({id:4,name:"Sita",grade:95})
students=[...students,{id:5, name:"Sita",grade:95}]
console.log(students)
//update=find and update
//find
let found = students.find(s=> s.id ===2)
//if  not found, it will be undefined
found.name="Shyam Bahadur"
console.log(students)
 
//update by index
let foundIndex = students.findIndex(s=> s.id===3)
students[foundIndex].grade=85
console.log(students)
 
students.splice(
    foundIndex,
    1,
)
console.log(students)
students.splice(
    0,//where to start
    1//how many to delete
)
console.log(students)
 
// Task, Create a CRUD application to simulate api behaviour/functions
// make use of list function, promise, async-await
let products = [
    { id: 101, name: "Laptiop", price: 50000 },
    { id: 102, name: "Mobile", price: 20000 },
    { id: 103, name: "Tablet", price: 30000 },
    { id: 104, name: "Monitor", price: 15000 }
]
// your application should be 6 functions to perform CRUD operations using Promise
// 1. createProduct
// -- takes product object as argument and add to products array
// -- check if id is present, if yes, reject with error
// -- if name is missing, replace with "Unknown Product"
// -- if price is missing, replace with 0
// 2. getProducts,
// -- returns all products after 2 seconds delay using Promise
// 3. getProductById,
// -- takes id as argument and returns product with that id after 1 second delay
// using Promise, if not found, reject with error
// 4. searchProduct,
// -- takes name as argument and returns all products that match the name
// 5. updateProduct,
// -- takes id and update object as arguments,
// finds product by id and updates it with the update object,
// if not found, reject with error
// 6. deleteProduct
// -- takes id as argument and deletes product with that id,
// if not found, reject with error, if deleted, resolve with success message
 
// Example:
const getProductById = (id) => new Promise(
    (resolve, reject)=> {
        setTimeout(() => {
            const product = products.find(p => p.id === id);
            if (product) {
                resolve(product);
            } else {
                reject(new Error("Product not found"));
            }
        }, 1000);
    }
)

const getProduct = (products) => new Promise(
    (resolve, reject) => {
        setTimeout(()=>{
            let product = [];
           for (let i = 0; i < products.lenght; i++){
              product.push(products[i].name);
           }
           return product;
        }, 2000)
    }
)
const searchProduct = (name) => new Promise(
    (resolve, reject) => {
       const filtered = product.filter(
        p=> p.name === search
       )
       resolve(filtered)
    }

)