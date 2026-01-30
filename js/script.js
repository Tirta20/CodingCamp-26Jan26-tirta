document.getElementById("formMessage").addEventListener("submit", function(e){
    e.preventDefault();

    let name  = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let msg   = document.getElementById("msg").value.trim();

    if(name === "" || email === "" || phone === "" || msg === ""){
        alert("Semua field harus diisi!");
        return;
    }

    // sapaan di home
    document.getElementById("welcomeText").innerText =
        "Hi " + name + ", Welcome To Website";

    // tampilkan hasil
    document.getElementById("rName").innerText  = name;
    document.getElementById("rEmail").innerText = email;
    document.getElementById("rPhone").innerText = phone;
    document.getElementById("rMsg").innerText   = msg;

    // waktu sekarang
    let now = new Date();
    document.getElementById("time").innerText = now.toString();

    // reset form
    this.reset();
});
