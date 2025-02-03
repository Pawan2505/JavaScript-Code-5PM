
function calculateSum(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum;
}

function maxElement(arr){
   return Math.max(...arr);
}

function minElement(arr){
   return Math.min(...arr);
}

function calculate(){
    let arr = document.getElementById('input-array').value.split(",").map(Number);

    if (arr.some(isNaN)) {
        document.getElementsByClassName('sum-answer')[0].innerHTML = 
            "Invalid input. Please enter a valid comma-separated list of numbers.";
        return;
    }
    else{
        document.getElementsByClassName('array')[0].innerHTML = `Array : ${arr}`
        document.getElementsByClassName('sum-answer')[0].innerHTML = `Sum of elemet of array : ${calculateSum(arr)}`;
        document.getElementsByClassName('max-element')[0].innerHTML = `Max Element : ${maxElement(arr)}`
        // console.log(maxElement(arr));
        document.getElementsByClassName('min-element')[0].innerHTML = `Min Element : ${minElement(arr)}`
        // console.log(minElement(arr));
    }
  
}

