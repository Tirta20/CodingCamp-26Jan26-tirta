// Welcome Name (Dynamic)
let user = prompt("Enter your name:");
document.getElementById("name").innerText = user;

// Form Validation + Output
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("userName").value;
  let email = document.getElementById("userEmail").value;
  let phone = document.getElementById("userPhone").value;
  let message = document.getElementById("userMessage").value;

  if (name === "" || email === "" || phone === "" || message === "") {
    alert("All fields must be filled!");
    return;
  }

  document.getElementById("result").innerHTML = `
    <b>Name:</b> ${name} <br>
    <b>Email:</b> ${email} <br>
    <b>Phone:</b> ${phone} <br>
    <b>Message:</b> ${message}
  `;
});
