function toggleMenu() {
    document.getElementsByClassName("menubar")[0].classList.toggle("hide");
    // let currentText = document.getElementsByClassName("menuText")[0].innerHTML;
    let menuText = document.getElementsByClassName("menuText")[0]
    console.log(menuText.innerHTML);
    if (menuText.innerHTML == "☰ Menu") {
        console.log("entro 1")
        menuText.innerHTML = "X";
    } else {
        console.log("entro 2")
        menuText.innerHTML = "&#9776; Menu";
    }
}

let options = {
    day:"numeric",
    month:"numeric",
    year:"numeric"
};
let lastDate = new Date();
document.getElementById('lastDate').textContent = lastDate.toLocleDateString("en-US", options);
document.getElementById('lastTime').textContent = lastDate.toLocaleTimeString("en-US", {hour12:false});