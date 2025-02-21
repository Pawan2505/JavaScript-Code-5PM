/****************************************************** */
// Method -1

// let num = 17;

// let count = 0;

// for(let i = 1; i <=num; i++){
//     if(num%i == 0){
//         count++;
//     }
// }

// if(count == 2){
//     console.log("Prime Number");
// }
// else{
//     console.log("Not Prime!");
// }

/**************************************************************** */


// Method-2

// function isPrime(num){
//     if(num <=1){
//         return false;
//     }

//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if(num%i == 0){
//             return false;
//         }
//     }

//     return true;
// }


// let num = 23;

// if(isPrime(num)){
//     console.log("Prime Number!");
// }else{
//     console.log("Not Prime Number")
// }

/*********************************************************************** */

// find prime number in range



function isPrime(num){

    if(num <=1){
        return false;
    }

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num%i == 0){
            return false;
        }
    }

    return true;

}

function findPrime(){
    let start = parseInt(document.getElementById('start').value);
    let end =  parseInt(document.getElementById('end').value);

    let primes = [];  // empty
    for(let i = start; i <=end; i++){
        console.log(isPrime(i));
            if(isPrime(i)){
                primes.push(i);
            }
    }


    document.getElementById('answer').innerHTML = `Prime Number : ${primes.join(",")}`;
}