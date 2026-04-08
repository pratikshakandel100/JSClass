// //synchronous statement
// const variable1 = "Ram";
// const variable2 = 2;

// console.log(variable1);
// console.log(variable2);

// //asynchronous statement
// setTimeout(
//     ()=>{
//         console.log("This is asynchronous Program");
//     }, 0
// );
// console.log("End of the program");


// //Promise/Future(any function that can take time)

// const promiseFn = () =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(
//             ()=>{
//                 reject(" Successs")
//             }, 200
//         )
//     })
// }
// promiseFn().then(result =>{
//     //result is resolve
//     console.log("Success")
//     console.log(result);
// })
// .catch(error => {
//     console.log("Exception")
//     console.log(error)
// });

// const main = async()=>{
//     try{
//          const result =  promiseFn(); // blocks the execution
//     console.log(result);
//     console.log("Rest of function")
//     } catch(error){
//         console.log("Rejected", error)
//     }
   
// }
// main();



// Task 1
const isEven = (num) => new Promise(
    (resolve, reject) => {
        if (num % 2 == 0) {
            resolve(true);
        } else {
            reject(false);
        }
    }
)


const isPositive = (num) => new Promise(
    (resolve, reject) => {
        if (num > 0) {
            resolve(true);
        } else {
            reject(false);
        }
    }
)

const result = async()=>{
    try{
        const evenResult = await isEven(2);
        console.log(evenResult);
        const positiveResult = await isPositive(3);
        console.log(positiveResult)
    } catch(error){
        console.log("Sorry", error)
    }
}
result();

isEven(4).then(()=>{
    console.log("Success")
    isPositive(4).then(result => {
        console.log("Is postive", result);
    }).catch(error =>{
        console.log("Is positive", error);
    })
})
.catch((error)=>{
   console.log(error);
})




// 1. run these function with async await, sequencially
// 2. run these function with .then and .catch, sequencially


//parallel execution

const parallelRun = async ()=>{
    try{
        const [result1, result2] = await Promise.all(
            [
                isEven(4),
                isPositive(4)
            ]
        );
        console.log("Is even: ", result1);
        console.log("Is positive: ", result2);
    }catch(error){
        console.log(error);
    }
}
parallelRun();

const parallelRun2 = async ()=>{
    try{
        const [result1, result2] = await Promise.allSettled(
            [
                isEven(4),
                isPositive(-4)
            ]
        )
        console.log("Is even: ", result1, result1.value); //value = resoved
        console.log("Is positive: ", result2, result2.value);
    }catch(error){
        console.log(error);
    }
}