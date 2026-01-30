let selectedHQ = "";

/* HQ CLICK */
document.querySelectorAll(".circle").forEach(circle => {
    circle.addEventListener("click", function(){

        document.querySelectorAll(".circle")
            .forEach(c => c.classList.remove("active"));

        this.classList.add("active");

        selectedHQ = this.getAttribute("data-city");
    });
});


/* FORM SUBMIT */
document.getElementById("formMessage").addEventListener("submit", function(e){
    e.preventDefault();

    let name  = document.getElementById("name").value.trim();
    let birth = document.getElementById("birth").value;
    let msg   = document.getElementById("msg").value.trim();

    let genderEl = document.querySelector('input[name="gender"]:checked');
    let gender = genderEl ? genderEl.value : "";

    if(name === "" || birth === "" || gender === "" || msg === ""){
        alert("Semua field harus diisi!");
        return;
    }

    if(selectedHQ === ""){
        alert("Pilih headquarter dulu!");
        return;
    }

    document.getElementById("welcomeText").innerText =
        "Hi " + name + ", Welcome To Website";

    document.getElementById("rName").innerText   = name;
    document.getElementById("rBirth").innerText  = birth;
    document.getElementById("rGender").innerText = gender;
    document.getElementById("rMsg").innerText    = msg;

    document.getElementById("rHQ").innerText = selectedHQ;

    /* Bandung png, lainnya jpg */
    let fileExt = selectedHQ === "Bandung" ? "png" : "jpg";

    document.getElementById("hqPreview").innerHTML =
        `<img src="img/${selectedHQ}.${fileExt}" alt="${selectedHQ}">`;

    let now = new Date();
    document.getElementById("time").innerText = now.toString();

    this.reset();
});
