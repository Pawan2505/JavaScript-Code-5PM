To create the `const apiKey` variable and use it in your code, follow these steps:

---

### **Step 1: Get an API Key**
1. **Sign up for an API Key:**
   - Go to the [CricAPI website](https://www.cricapi.com/).
   - Click on the **Get API Key** button or visit [https://www.cricapi.com/register/](https://www.cricapi.com/register/).
   - Fill out the registration form to request a free API key.
   - Verify your email address by clicking the link sent to your inbox.

2. **Copy the API Key:**
   - Once you log in to your CricAPI account, you will see your API key on the dashboard.
   - It will look something like this:
     ```
     abc123xyz456
     ```

---

### **Step 2: Use the API Key in Your Code**
1. **Replace `'YOUR_API_KEY'` with your actual API key:**
   - In your JavaScript code, replace `'YOUR_API_KEY'` with the API key you received.
   - Example:
     ```javascript
     const apiKey = 'abc123xyz456'; // Replace with your actual API key
     ```

2. **Use the API Key in the `fetch()` Request:**
   - Add the `apiKey` to the API URL as a query parameter.
   - Example:
     ```javascript
     fetch(`https://cricapi.com/api/matches?apikey=${apiKey}`)
     ```

---

### **Step 3: Full Code Example**
Here’s how your code will look after replacing the placeholder with your actual API key:

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
        const apiKey = 'abc123xyz456'; // Replace with your actual API key

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

---

### **Step 4: Run the Code**
1. Save the file with a `.html` extension (e.g., `cricket.html`).
2. Open the file in a web browser.
3. You should see a list of live or upcoming cricket matches displayed on the webpage.

---

### **Important Notes:**
- **Keep Your API Key Private:**
  - Do not share your API key publicly or upload it to GitHub.
  - If you are using version control (e.g., Git), add the API key to a `.gitignore` file or use environment variables to keep it secure.
- **API Key Limits:**
  - Free API keys often have usage limits (e.g., 100 requests per day). Check the API documentation for details.

---

### **Step 5: Try Different Endpoints**
- CricAPI provides multiple endpoints for different types of data. For example:
  - **Player Statistics:**
    ```javascript
    fetch(`https://cricapi.com/api/playerStats?apikey=${apiKey}&pid=35320`) // Replace pid with player ID
    ```
  - **Match Score:**
    ```javascript
    fetch(`https://cricapi.com/api/cricketScore?apikey=${apiKey}&unique_id=1234567`) // Replace unique_id with match ID
    ```

---
