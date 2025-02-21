// step : 1

// // Create a new AJAX request
// let xhr = new XMLHttpRequest();

// // Configure the request (GET request to fetch user data)
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

// // Handle response when request completes
// xhr.onload = function () {
//     if (xhr.status === 200) {
//       let data = JSON.parse(xhr.responseText);
//         console.log("Response Data:", data);
//         console.log(data[0])
//   } else {
//     console.error("Error:", xhr.status);
//   }
// };

// // Send the request
// xhr.send();

// step : 2

// let URL = "https://jsonplaceholder.typicode.com/posts";

// let promises = fetch(URL);

// console.log(promises)

// step 3:

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// let URL = "https://jsonplaceholder.typicode.com/posts";
// let getDetails = async () => {
//     let promises = await fetch(URL);
//         console.log(promises);
//     let data = await promises.json();

//     console.log(data[0].title)

    
// };

// getDetails();


// step 4 : pomises chain

let URL = "https://jsonplaceholder.typicode.com/posts";
fetch(URL)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error("Error:", error));
