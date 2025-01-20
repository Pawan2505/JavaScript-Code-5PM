
/****************************** Switch Case ******************************************** */
// let num1 = 10;
// let num2 = 5;

// let op = "*";

// switch(op){
//     case "+":
//         console.log(`Addition : ${num1+num2}`);
//         break;
//     case "-":
//         console.log(`Subtract : ${num1-num2}`);
//         break;
//     case "*":
//         console.log(`Multiplication : ${num1*num2}`);
//         break;
//     case "/":
//         console.log(`Divide : ${num1/num2}`)
//         break;
//     case "%":
//         console.log(`remainder : ${num1%num2}`);
//         break;
//     default :
//         console.log("Invalid Operator!");
        
// }


/************************************************************************ */




function addition(){
    let num1 = document.getElementById('input-num1').value;
    let num2 = document.getElementById('input-num2').value;

    let result = parseInt(num1)+parseInt(num2);
    // let result = parseInt.num1+parseInt.num2;  // not ok

    document.getElementById('answer').innerText = `Addition : ${result}`;
}


