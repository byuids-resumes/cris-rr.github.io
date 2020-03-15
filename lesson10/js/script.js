let options = {
    day: "numeric",
    month: "numeric",
    year: "numeric"
};
let lastDate = new Date();
let day = lastDate.getDay();
let month = lastDate.getMonth();
let year = lastDate.getFullYear();
let dayMonth = lastDate.getDate()
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

let months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August",
    "September", 
    "October", 
    "November", 
    "December"
]

let actualDate = days[day] + ", " + dayMonth + " " + months[month] + " " + year;
document.getElementById('lastDate').textContent = actualDate;

if (day == 5) {
    document.getElementsByClassName("banner")[0].style.display = "block";
} else {
    document.getElementsByClassName("banner")[0].style.display = "none";
}


//Functions ----------------------------------------- 
function toggleMenu() {
    document.getElementsByClassName("menubar")[0].classList.toggle("hide");
    let menuText = document.getElementsByClassName("menuText")[0]
    if (menuText.innerHTML == "☰ Menu") {
        menuText.innerHTML = "X";
    } else {
        menuText.innerHTML = "&#9776; Menu";
    }
}