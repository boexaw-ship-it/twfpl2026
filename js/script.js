// ===============================
// TW FPL UI Script
// ===============================

// Message Send Function
function sendMessage() {
  const box = document.getElementById("messageBox");
  const input = document.getElementById("newMessage");

  if (!box || !input) return;

  const msg = input.value.trim();
  if (msg === "") return;

  // Add message
  const time = new Date().toLocaleTimeString();
  box.innerHTML += `<div>• ${msg} <span style="color:#777;font-size:12px">(${time})</span></div>`;

  // Clear input
  input.value = "";

  // Auto clear after 2 hours (7200 seconds)
  setTimeout(() => {
    box.innerHTML = "Welcome to TW FPL!";
  }, 7200 * 1000);
}

// ===============================
// Optional: Enter key submit
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("newMessage");
  if (!input) return;

  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });
});