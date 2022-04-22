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
