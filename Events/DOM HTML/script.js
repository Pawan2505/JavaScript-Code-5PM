// JavaScript DOM Manipulation & Events

// 1. Iterating over an array using forEach()
let arr = [10, 20, 30, 40, 50, 60, 70, 80];
arr.forEach((item, index) => {
    console.log(`${index} index value: ${item}`);
});

// 2. Selecting elements using getElementById()
let firstheading = document.getElementById('heading-h1');

// Changing HTML content
firstheading.innerHTML = `<i>document.getElementById('heading-h1')</i> `;

// Changing plain text content
firstheading.innerText = `<i>document.getElementById('heading-h1')</i> `;

// 3. Selecting elements using getElementsByClassName()
// Accessing multiple elements using class name
document.getElementsByClassName('heading-h2')[0].innerHTML = `<i>First H2 Element</i>`;
document.getElementsByClassName('heading-h2')[1].innerHTML = `<i>Second H2 Element</i>`;
document.getElementsByClassName('heading-h2')[2].innerHTML = `<i>Third H2 Element</i>`;

// Fetching text content from an element
let valueElement = document.getElementsByClassName('heading-h3')[0].textContent;
console.log(valueElement);
alert(valueElement);

// 4. Selecting elements using getElementsByTagName()
// Accessing elements by tag name
document.getElementsByTagName('p')[0].innerHTML = `<b>First Paragraph</b>`;
document.getElementsByTagName('p')[2].innerHTML = `<b>Third Paragraph</b>`;

// 5. Selecting elements using querySelector()
// Accessing first matched element
document.querySelector('.box').innerHTML = `<i>First Box Element</i>`;
document.querySelector('#boxid').innerHTML = `<i>Element with ID: boxid</i>`;
document.querySelector('div').innerHTML = `<i>First DIV Element</i>`;

// 6. Selecting multiple elements using querySelectorAll()
// Accessing all elements with a specific class
document.querySelectorAll('.box')[0].innerHTML = `<i>First Box</i>`;
document.querySelectorAll('.box')[3].innerHTML = `<i>Fourth Box</i>`;

// Incorrect: querySelectorAll returns a NodeList, not a single element
// document.querySelectorAll('.box').innerHTML = `<i>This won't work</i>`;

// Fetching inner HTML of an element
let text = document.getElementById('para');
console.log(text.innerHTML);

// Looping through selected elements
let boxdiv = document.querySelectorAll('.box');
boxdiv.forEach((divItem, index) => {
    console.log(`${index} index: ${divItem.innerHTML}`);
});

// Accessing input field values using name attribute
let name = document.getElementsByName('fname')[1].value;
console.log(name);

// 7. Adding event listeners using addEventListener()

// Click event to fetch input value
document.getElementById('btn-get').addEventListener('click', () => {
    let phone = document.getElementsByName('fphone')[0].value;
    console.log(phone);
});

// Function-based event handling
function get() {
    let phone = document.getElementsByName('fphone')[0].value;
    console.log(phone);
}

// Double-click event to change font size
document.getElementById('para').addEventListener('dblclick', function () {
    document.getElementById('para').style.fontSize = "40px";
});

// Window load event
window.addEventListener('load', () => {
    document.write("Loading...");
});

// 8. Modifying attributes using setAttribute()

// Adding a class to an element
let para01 = document.getElementById('para1');
para01.setAttribute("class", "container");

// Click event to change class dynamically
document.getElementById('btn-change').addEventListener('click', () => {
    let para01 = document.getElementById('para1');
    para01.setAttribute("class", "container");
});

// Mouse events to add/remove a class
document.getElementById('para1').addEventListener('mouseover', () => {
    let para01 = document.getElementById('para1');
    para01.classList.add('container');
});

document.getElementById('para1').addEventListener('mouseout', () => {
    let para01 = document.getElementById('para1');
    para01.classList.remove('container');
});

// Getting an attribute value
let valuetitle = para01.getAttribute("title");
alert(valuetitle);

// 9. Styling elements dynamically

// Changing styles individually
para01.style.backgroundColor = "red";
para01.style.color = "white";

// Applying multiple styles using cssText
para01.style.cssText = "background-color: red; color: white;";

// 10. Creating and removing elements dynamically

// Creating a new H1 element
let newElement = document.createElement("h1");
newElement.textContent = "Hello, New Element!";

// Appending element to the container
document.getElementsByClassName("container")[0].appendChild(newElement);

// Removing the newly created element
document.getElementsByClassName("container")[0].removeChild(newElement);
