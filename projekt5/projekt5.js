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

const butik = {
    firstName: "@butik",
    lastName: "pulvis",
    fullName: function() {
      return this.firstName + this.lastName;
    }
};

document.getElementById("instaid").innerHTML = butik.fullName();

const instagramp = ["På vores instagram vil vi hyppigt lave opslag med en masse unikke skatte,", "<br>med dertilhørende priser så du kan reservere  og hente i butikken"];

document.getElementById("instagramp").innerHTML =
instagramp[0] + instagramp[1];


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
  if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
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
