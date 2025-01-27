
// Normal Function (Function with Name)


// // function definition -> parameter pass kiya hai (x,y)
// function addition(x, y){  

//     console.log(x+y);
// }

// addition(10,20);   // function call -> inside function call -> argument

// return type function

// function subtract(num1, num2){

//     let sub = num1-num2;
//     return sub;

// }

// let result = subtract(30,10);

// console.log(result);  //20


// Recurssion Function



// function factorial(num){
    
//     //Base Condition

//     if(num == 1){
//         return 1;
//     }

//     return num * factorial(num-1);
// }

// let result = factorial(5);

// console.log(result);


// function addition(num){

//     // Base condition
//     if(num == 10){
//         return 10;
//     }

//     return num+ addition(num+1);  // jabtak base ondition true nhi hoga tab tak recursion function
// }

// let result = addition(1);  // call

// console.log(result); // output



// clouser Funtion => previous value yaad rkhta hai or har call ki value yaad rkhta hai

// let count = 0;

// function outerfunction(){
        
//     return count++;
    
// }

// console.log(outerfunction());


// let count = 0;

// function outerfunction(){
        
//     function innerfunction(){
     
//         console.log(count);
//     }

//  innerfunction();
//  return 0;
// }

// console.log(outerfunction());  // undefined
// console.log(outerfunction());  // undefined
// console.log(outerfunction());  // undefined
// console.log(outerfunction());  // undefined

// let count = 0;

// function outerfunction(){

//     function innerfunction(){
     
//         return count++;
//     }

// console.log(innerfunction());

// }

// outerfunction();  
// outerfunction();  
// outerfunction();  
// outerfunction();  


// function outerfunction(){
//     let count = 0;

//     return function innerfunction(){
     
//         return count++;
//     }


// }

// let result = outerfunction();  

// console.log(result());
// console.log(result());
// console.log(result());
// console.log(result());




// function outerfunction(){
//     console.log("Hello world");
// }

// outerfunction();


// let num = 10;

// function fun(){
//     console.log(num);
// }

// fun();


// let num = 10;

// function fun(){
//     return 10;
// }


// console.log(fun());


// function fun1(){

//     console.log("fun1 function called..");

//     function fun2(){
//         console.log("fun2 funtion called..");
//     }

//     fun2();
// }

// fun1();


// function fun1(){


//     console.log("fun1 function called..");

//     function fun2(){
//         console.log("fun2 funtion called..");
//     }

//     fun2()  // correct
    
// }

// fun1();

// fun2();   // incorrect way


// clouser function => previous value yaad rkhta 


// step 1: Define an Outer Function

function outer(){

    // step 2 : Create an Inner Function
    // step 3 : Return the Inner Function

    let count = 0;

   return function inner(){
        return count++;
    }
}

// step 4: Call the Outer Function

let result = outer();

// step 5 : Call the Inner Function
// You can now call the inner function from the variable where the outer function's return value is stored.

console.log(result());
console.log(result());
console.log(result());