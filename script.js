// Add to cart alerts
document.querySelectorAll("button").forEach((btn) => {
  if (btn.id !== "theme-toggle") {
    btn.addEventListener("click", () => {
      alert("🛒 Product added to cart!");
    });
  }
});

// Toggle theme
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Check saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

