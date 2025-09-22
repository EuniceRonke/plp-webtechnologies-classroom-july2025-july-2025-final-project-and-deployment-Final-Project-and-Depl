// ----------------------
// Theme Toggle
// ----------------------
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// ----------------------
// Counter Project
// ----------------------
let counter = 0;
const counterValue = document.getElementById('counterValue');

function updateCounter(val) {
  counter += val;
  return counter;
}

document.getElementById('increaseBtn').addEventListener('click', () => {
  counterValue.textContent = updateCounter(1);
});
document.getElementById('resetBtn').addEventListener('click', () => {
  counter = 0; 
  counterValue.textContent = counter;
});

// ----------------------
// FAQ Toggle
// ----------------------
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// ----------------------
// Part 2: JS Functions
function greetUser(name) {
  return `Hello, ${name}!`;
}

function squareNumber(num) {
  return num * num;
}

// DOM Elements
const runFunctionsBtn = document.getElementById('runFunctionsBtn');
const functionsOutput = document.getElementById('functionsOutput');
const userNameInput = document.getElementById('userName');
const userNumberInput = document.getElementById('userNumber');

runFunctionsBtn.addEventListener('click', () => {
  const name = userNameInput.value.trim();
  const number = parseFloat(userNumberInput.value);

  if (!name || isNaN(number)) {
    functionsOutput.innerHTML = `<p>Please enter a valid name and number.</p>`;
    return;
  }

  functionsOutput.innerHTML = `
    <p>${greetUser(name)}</p>
    <p>Square of ${number} is ${squareNumber(number)}</p>
  `;
});


// Display results on the page
document.addEventListener('DOMContentLoaded', () => {
  const functionsOutput = document.getElementById('functionsOutput');
  if (functionsOutput) {
    functionsOutput.innerHTML = `
      <p>${greetUser("Eunice")}</p>
      <p>Square of 4 is ${squareNumber(4)}</p>
    `;
  }
});

// ----------------------
// Animations with JS (Part 3)
// ----------------------
const animateBoxBtn = document.getElementById('animateBoxBtn'); 
const box = document.getElementById('box');

animateBoxBtn.addEventListener('click', () => {
  box.style.transform = "translateX(200px) rotate(180deg)";
  setTimeout(() => { 
    box.style.transform = "translateX(0) rotate(0)"; 
  }, 1000);
});

// ----------------------
// Modal (Contact Info)
// ----------------------
const modal = document.getElementById('modal');
const showModalBtn = document.getElementById('showModalBtn'); // nav Contact link
const closeModal = document.getElementById('closeModal');

showModalBtn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent page jump
  modal.style.display = "flex";
});

closeModal.addEventListener('click', () => {
  modal.style.display = "none";
});

// click outside modal to close
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
