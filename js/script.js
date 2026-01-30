// ===== Welcome Prompt =====
let userName = prompt("Masukkan nama kamu:");
document.getElementById("username").innerText = userName;

// ===== Current Time =====
function updateTime() {
  document.getElementById("currentTime").innerText =
    new Date().toLocaleString();
}

updateTime();

// ===== Form Validation =====
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("nameInput").value;
  let email = document.getElementById("emailInput").value;
  let phone = document.getElementById("phoneInput").value;
  let message = document.getElementById("messageInput").value;

  if (name === "" || email === "" || phone === "" || message === "") {
    alert("Semua field wajib diisi!");
    return;
  }

  document.getElementById("outName").innerText = name;
  document.getElementById("outEmail").innerText = email;
  document.getElementById("outPhone").innerText = phone;
  document.getElementById("outMessage").innerText = message;

  updateTime();
});
