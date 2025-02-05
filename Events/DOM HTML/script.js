// let arr = [10,20,30,40,50,60,70,80];

// arr.forEach((item,index)=>{
//     console.log(`${index} index value : ${item}`);
// })

//1. getElementById()

// let firstheading = document.getElementById('heading-h1');

// firstheading.innerHTML = `<i>document.getElementById('heading-h1')</i> `

// firstheading.innerText = `<i>document.getElementById('heading-h1')</i> `

//2. getElementsByClassName()

// document.getElementsByClassName('heading-h2')[0].innerHTML = `<i>getElementsByClassName('heading-h2')[0].innerHTML</i>`
// document.getElementsByClassName('heading-h2')[1].innerHTML = `<i>getElementsByClassName('heading-h2')[1].innerHTML</i>`

// document.getElementsByClassName('heading-h2')[2].innerHTML = `<i>getElementsByClassName('heading-h2')[2].innerHTML</i>`

// let valueElement =  document.getElementsByClassName('heading-h3')[0].textContent;

// console.log(valueElement);
// alert(valueElement);

//3. getElementsByTagName()

// document.getElementsByTagName('p')[0].innerHTML = `<b>getElementsByTagName('p')[0].innerHTML</b>`
// document.getElementsByTagName('p')[2].innerHTML = `<b>getElementsByTagName('p')[2].innerHTML</b>`

//4.  querySelector()

// document.querySelector('.box').innerHTML = `<i>document.querySelector('.box').innerHTML</i>`
// document.querySelector('#boxid').innerHTML = `<i>document.querySelector('.box').innerHTML</i>`
// document.querySelector('div').innerHTML = `<i>document.querySelector('.box').innerHTML</i>`

//5. querySelectorAll()

// document.querySelectorAll('.box')[0].innerHTML = `<i>querySelectorAll('.box')[0].innerHTML</i>`
// document.querySelectorAll('.box')[3].innerHTML = `<i>querySelectorAll('.box')[3].innerHTML</i>`
// document.querySelectorAll('.box').innerHTML = `<i>querySelectorAll('.box')[3].innerHTML</i>`  // incorrect


// let text = document.getElementById('para');

// console.log(text.innerHTML);

 
// let boxdiv = document.querySelectorAll('.box');

// boxdiv.forEach((divItem, index ) =>{
//     console.log(`${index} index : ${divItem.innerHTML}`)
// })


// let name = document.getElementsByName('fname')[0].value;
// console.log(name);
