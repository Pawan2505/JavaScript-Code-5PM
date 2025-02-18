### **Lecture Notes: Fetching Data from a Cricket API using JavaScript**

---

#### **1. What is a Cricket API?**
- **API** stands for **Application Programming Interface**.
- A Cricket API provides real-time data about cricket matches, scores, player statistics, and more.
- Example: [CricAPI](https://www.cricapi.com/).
- **Why use a Cricket API?**
  - To build applications like live scoreboards, match schedules, or player stats trackers.

---

#### **2. What is `fetch()` in JavaScript?**
- `fetch()` is a built-in JavaScript method used to make network requests (like fetching data from an API).
- It returns a **Promise** (a placeholder for data that will be available in the future).
- Syntax:
  ```javascript
  fetch('API_URL')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  ```
- Steps:
  1. Send a request to the API using `fetch('API_URL')`.
  2. Convert the response to JSON using `.then(response => response.json())`.
  3. Handle the data using `.then(data => console.log(data))`.
  4. Handle errors using `.catch(error => console.error('Error:', error))`.

---

#### **3. Fetching Data from a Cricket API**
- **Step 1: Choose a Cricket API**
  - Example API: [CricAPI](https://www.cricapi.com/)
  - Sign up for a free API key [here](https://www.cricapi.com/).

- **Step 2: Write the JavaScript Code**
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cricket Data</title>
  </head>
  <body>
      <h1>Live Cricket Matches</h1>
      <div id="cricket-data"></div>

      <script>
          // Step 1: Replace with your API key
          const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

          // Step 2: Fetch live cricket matches
          fetch(`https://cricapi.com/api/matches?apikey=${apiKey}`)
              .then(response => response.json())
              .then(data => {
                  // Step 3: Display the data on the webpage
                  const cricketDataElement = document.getElementById('cricket-data');
                  let matches = data.matches;

                  matches.forEach(match => {
                      cricketDataElement.innerHTML += `
                          <div>
                              <h2>${match.team1} vs ${match.team2}</h2>
                              <p>Match Type: ${match.type}</p>
                              <p>Date: ${match.date}</p>
                              <p>Status: ${match.matchStarted ? 'Live' : 'Not Started'}</p>
                              <hr>
                          </div>
                      `;
                  });
              })
              .catch(error => {
                  console.error('Error:', error);
              });
      </script>
  </body>
  </html>
  ```

- **Step 3: Run the Code**
  - Open the HTML file in a browser.
  - You should see a list of live or upcoming cricket matches displayed on the webpage.

---

#### **4. Explanation of the Code**
- **HTML Structure:**
  - A simple HTML page with a `<div>` to display the data.
- **JavaScript Code:**
  - `fetch('API_URL')`: Fetches data from the API.
  - `.then(response => response.json())`: Converts the response to JSON.
  - `.then(data => { ... })`: Displays the data in the `<div>`.
  - `.catch(error => { ... })`: Handles any errors that occur during the fetch.

---

#### **5. Hands-On Activity**
- **Task:** Modify the code to fetch and display player statistics or match scores.
- **Hint:** Use the `playerFinder` or `cricketScore` endpoints from the CricAPI documentation.

---

### **Project:**
1. Create a webpage that fetches and displays player statistics for a specific player.
   - Use this API: [https://cricapi.com/api/playerFinder](https://cricapi.com/api/playerFinder)
   - Hint: Use the `name` parameter to search for a player.
2. Add a search bar to allow users to search for matches or players by name.

---

### **Note:**
- APIs allow us to fetch real-time data from external sources.
- The `fetch()` method in JavaScript is used to make network requests.
- We can use APIs to build dynamic and data-driven web applications.

---

### **Additional Resources:**
- [MDN Web Docs: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [CricAPI Documentation](https://www.cricapi.com/how-to-use.aspx)

---
