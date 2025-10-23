// ===============================
// 🎨 PART 1: Event Handling
// ===============================

// Toggle Dark/Light Mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// ===============================
// 🎮 PART 2: Interactive Elements
// ===============================

// Counter Feature
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

// FAQ Toggle
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// ===============================
// 📋✅ PART 3: Form Validation
// ===============================

const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;
  let messages = [];

  // Validate name
  if (nameInput.value.trim().length < 3) {
    valid = false;
    messages.push("Name must be at least 3 characters long.");
  }

  // Validate email (simple regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    valid = false;
    messages.push("Please enter a valid email address.");
  }

  // Validate password
  if (passwordInput.value.length < 6) {
    valid = false;
    messages.push("Password must be at least 6 characters long.");
  }

  // Display message
  if (!valid) {
    formMessage.style.color = "red";
    formMessage.textContent = messages.join(" ");
  } else {
    formMessage.style.color = "green";
    formMessage.textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});
