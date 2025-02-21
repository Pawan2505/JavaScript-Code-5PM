
let num1 = parseInt(prompt("Enter Num1 : "));
document.write(`Num1 : ${num1} <br/>`)
let num2 = parseInt(prompt("Enter Num2 : "));
document.write(`Num2 : ${num2} <br/>`)
let num3 = parseInt(prompt("Enter Num3: "));
document.write(`Num3 : ${num3} <br/>`)

let result1 = (num1 < num2) &&  (num1 > num3);
let result2 = (num1 < num2) ||  (num1 > num3);
let result3 = !((num1 < num2) ||  (num1 > num3));

document.getElementsByClassName('heading1')[0].innerHTML =`(num1 < num2) &&  (num1 > num3) :  ${result1} <br/>`;
document.getElementsByClassName('heading2')[0].innerHTML =`(num1 < num2) ||  (num1 > num3) :  ${result2} <br/>`;
document.getElementsByClassName('heading3')[0].innerHTML =`!((num1 < num2) ||  (num1 > num3)) :  ${result3} <br/>`;



// jab bhee apko ui kuchh bhee likhna hota hai javascript : document.write();
// jab bhee apko ui kuchh bhee likhna hota hai javascript but har baar next line me likhna hai  : document.writeln(); -> not working


document.writeln("Hello World ")
document.writeln("Hey, How are you?")

