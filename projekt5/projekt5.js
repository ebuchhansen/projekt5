// Kode - Emilie //

let instagramTitle = document.getElementById("instagramtitle");
instagramTitle.style.color = "#FD5A05";

let number = 1

if (number > 0){
    console.log("ifWorking")
}
else {
    console.log("elseWorking")
}

var butik = {firstName:"@butik", lastName:"pulvis"};

document.getElementById("instaid").innerHTML =
butik.firstName + butik.lastName;

let text = "";
let i = 0;
while (i < 1) {
    text += "<h1>Hvordan forgår en rydning?</h1>";
    i++;
}
document.getElementById("rydningtitle").innerHTML = text;


// Kode - Magnus //

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

function check_empty() {
  if (document.getElementById('navn').value == "" || document.getElementById('mail').value == "" || document.getElementById('msg').value == "") {
  alert("Udfyld alle felter !");
  } else {
  document.getElementById('form').submit();
  alert("Beskeden er nu sendt !");
  }
  }
  //Function der viser popup
  function div_show() {
  document.getElementById('abc').style.display = "block";
  }
  //Function der gemmer Popup
  function div_hide(){
  document.getElementById('abc').style.display = "none";
  }


  // Kode - Jakob //
  const name = document.getElementById('name')
  const password = document.getElementById('password')
  const tlf = document.getElementById('name')
  const besked = document.getElementById('password')
  const form = document.getElementById('form')
  const errorElement = document.getElementById('error')
  
  form.addEventListener('submit', (e) => {
    let messages = []
    
    if (password.value.length <= 6) {
      messages.push('Email must be longer than 6 characters')
    }
  
    if (tlf.value.length >= 20) {
      messages.push('Email must be less than 20 characters')
    }
  
  })
  
  
  function isInputNumber(evt){
                  
    var ch = String.fromCharCode(evt.which);
    
    if(!(/[0-9]/.test(ch))){
        evt.preventDefault();
    }
    
  }
  