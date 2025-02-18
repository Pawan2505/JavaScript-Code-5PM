// let jsonValue = {
//     "name":"Pawan",
//     "age":25
// }

// console.log(typeof jsonValue);


let result = {
    "name": "Amit Sharma",
    "age": 28,
    "isMarried": false,
    "skills": ["JavaScript", "React", "Node.js"],
    "address": {
      "city": "Mumbai",
      "state": "Maharashtra",
      "pincode": "400001"
    }
  }

  console.log(typeof result)

  console.log(JSON.stringify(result))
  console.log(typeof JSON.stringify(result))
  console.log(typeof JSON.parse(JSON.stringify(result)))