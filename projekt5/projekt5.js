
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
