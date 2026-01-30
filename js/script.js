document.getElementById("formMessage").addEventListener("submit", function(e){
    e.preventDefault();

    let name  = document.getElementById("name").value.trim();
    let birth = document.getElementById("birth").value;
    let msg   = document.getElementById("msg").value.trim();

    let genderEl = document.querySelector('input[name="gender"]:checked');
    let gender = genderEl ? genderEl.value : "";

    // validasi wajib isi semua
    if(name === "" || birth === "" || gender === "" || msg === ""){
        alert("Semua field harus diisi!");
        return;
    }

    // ubah teks welcome jadi Hi Nama
    document.getElementById("welcomeText").innerText =
        "Hi " + name + ", Welcome To Website";

    // tampilkan hasil di kotak kanan
    document.getElementById("rName").innerText   = name;
    document.getElementById("rBirth").innerText  = birth;
    document.getElementById("rGender").innerText = gender;
    document.getElementById("rMsg").innerText    = msg;

    // waktu sekarang
    let now = new Date();
    document.getElementById("time").innerText = now.toString();

    // reset form setelah submit
    this.reset();
});
