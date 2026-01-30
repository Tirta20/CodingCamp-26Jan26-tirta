let selectedHQ = "";

/* ===== HQ CLICK EVENT ===== */
document.querySelectorAll(".circle").forEach(circle => {
    circle.addEventListener("click", function(){

        // hapus active sebelumnya
        document.querySelectorAll(".circle")
            .forEach(c => c.classList.remove("active"));

        // aktifkan yg dipilih
        this.classList.add("active");

        // simpan nama kota
        selectedHQ = this.getAttribute("data-city");
    });
});


/* ===== FORM SUBMIT ===== */
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

    // validasi HQ wajib dipilih
    if(selectedHQ === ""){
        alert("Pilih headquarter dulu!");
        return;
    }

    // ubah teks welcome
    document.getElementById("welcomeText").innerText =
        "Hi " + name + ", Welcome To Website";

    // tampilkan hasil output
    document.getElementById("rName").innerText   = name;
    document.getElementById("rBirth").innerText  = birth;
    document.getElementById("rGender").innerText = gender;
    document.getElementById("rMsg").innerText    = msg;

    // tampilkan HQ
    document.getElementById("rHQ").innerText = selectedHQ;

    // tampilkan gambar HQ sesuai file
    let preview = document.getElementById("hqPreview");

    let fileExt = selectedHQ === "Bandung" ? "png" : "jpg";

    preview.innerHTML = `
        <img src="images/${selectedHQ}.${fileExt}" alt="${selectedHQ}">
    `;

    // waktu sekarang
    let now = new Date();
    document.getElementById("time").innerText = now.toString();

    // reset form setelah submit
    this.reset();
});
