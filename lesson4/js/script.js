let options = {
    day:"numeric",
    month:"numeric",
    year:"numeric"
};
let lastDate = new Date();
document.getElementById('lastDate').textContent = lastDate.toLocaleDateString("en-US", options);
document.getElementById('lastTime').textContent = lastDate.toLocaleTimeString("en-US", {hour12:false});

function toggleMenu() {
    document.getElementsByClassName("menubar")[0].classList.toggle("hide");
    let menuText = document.getElementsByClassName("menuText")[0]
    if (menuText.innerHTML == "☰ Menu") {
        menuText.innerHTML = "X";
    } else {
        menuText.innerHTML = "&#9776; Menu";
    }
}

