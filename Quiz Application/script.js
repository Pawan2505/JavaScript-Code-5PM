// Array of question objects, each containing the question, options, and the correct answer
const questions = [
  {
    question: "What is sum of 2 + 4 ?", // The question text
    options: ["4", "5", "6", "7"], // The options for answers
    answer: "6", // The correct answer
  },
  {
    question: "What is subtract of 12 - 4 ?",
    options: ["4", "8", "6", "7"],
    answer: "8",
  },
  {
    question: "What is Product of 2 * 4 ?",
    options: ["4", "5", "8", "7"],
    answer: "8",
  },
  {
    question: "What is remainder of 2 % 4 ?",
    options: ["2", "5", "6", "7"],
    answer: "2",
  },
];

// Variables to keep track of the current question index and score
let index = 0,
  score = 0;

// DOM elements for displaying the question, options, next button, and score
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("opitions");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

// Function to load the current question and its options
function loadQuestion() {
  let q = questions[index]; // Get the current question object

  // Display the question
  questionEl.textContent = q.question;

  // Clear previous options
  optionsEl.innerHTML = "";

  // Disable the "Next" button until an answer is selected
  nextBtn.disabled = true;

  // Loop through the options and create a button for each option
  q.options.forEach((opt) => {
    let btn = document.createElement("button");
    btn.innerHTML = opt; // Set the button text as the option
    btn.className = "option"; // Add class for styling
    btn.onclick = () => checkAnswer(btn, opt); // Set an event listener to check the answer
    optionsEl.appendChild(btn); // Add the button to the options container
  });
}

// Function to check if the selected option is correct
function checkAnswer(btn, selected) {
  let correct = questions[index].answer; // Get the correct answer for the current question

  // Change the button color based on whether the selected answer is correct or not
  btn.classList.add(selected === correct ? "bg-primary" : "bg-danger");

  // If the answer is correct, increase the score
  if (selected === correct) {
    score++;
  }

  // Disable all options once one is selected
  document.querySelectorAll(".option").forEach((b) => (b.disabled = true));

  // Enable the "Next" button to move to the next question
  nextBtn.disabled = false;
}

// When the "Next" button is clicked
nextBtn.onclick = () => {
  index++; // Move to the next question

  // If there are more questions, load the next one
  if (index < questions.length) {
    loadQuestion();
  } else {
    // If the quiz is over, show the results
    questionEl.textContent = "Quiz Completed";
    optionsEl.innerHTML = ""; // Clear the options
    nextBtn.style.display = "none"; // Hide the next button
    scoreEl.textContent = `Your Score : ${score}/${questions.length}`; // Show the score

    // Make the score display visible
    scoreEl.classList.remove("d-none");
  }
};

// Initially load the first question
loadQuestion();
