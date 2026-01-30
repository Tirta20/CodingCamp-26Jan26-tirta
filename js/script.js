let selectedHQ = "";

/* PILIH HQ */
document.querySelectorAll(".circle").forEach(circle=>{
  circle.addEventListener("click", function(){

    document.querySelectorAll(".circle")
      .forEach(c=>c.classList.remove("active"));

    this.classList.add("active");
    selectedHQ = this.dataset.city;
  });
});

/* SUBMIT FORM */
document.getElementById("formMessage").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let birth = document.getElementById("birth").value;
  let msg = document.getElementById("msg").value;

  let gender = document.querySelector("input[name='gender']:checked");

  if(!gender || selectedHQ===""){
    alert("Isi semua field + pilih HQ dulu!");
    return;
  }

  document.getElementById("welcomeText").innerText =
    "Hi " + name + ", Welcome To Website";

  document.getElementById("rName").innerText = name;
  document.getElementById("rBirth").innerText = birth;
  document.getElementById("rGender").innerText = gender.value;
  document.getElementById("rMsg").innerText = msg;
  document.getElementById("rHQ").innerText = selectedHQ;

  let ext = (selectedHQ==="Bandung") ? "png" : "jpg";

  document.getElementById("hqPreview").innerHTML =
    `<img src="img/${selectedHQ}.${ext}" alt="">`;

  document.getElementById("time").innerText = new Date().toString();
});
