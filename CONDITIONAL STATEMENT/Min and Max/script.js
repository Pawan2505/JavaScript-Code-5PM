
/*********************************************************************************** */

// let minValue = Math.min(10,22,2,15,18);

// console.log(minValue);

// let maxValue = Math.max(12,354,6,78,9,87);

// console.log(maxValue);



/****************************************************************************** */

function findMin(){
    let arr1 = document.querySelector('#input-finder').value.split(',').map(Number);

    // console.log(arr1);

    let result1 = Math.min(...arr1);

    document.querySelector('#answer').innerHTML = `<i>Minimum Number : </i> ${result1}`
}


function findMax(){
    let arr2 = document.querySelector('#input-finder').value.split(',').map(Number);

    // console.log(arr1);

    let result2 = Math.max(...arr2);

    document.querySelector('#answer').innerHTML = `<i>Maximum Number : </i> ${result2}`
}