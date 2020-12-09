var tooltips = document.querySelectorAll('.navTable span');
var themeButton = document.getElementById("theme");
var infoButton = document.getElementById("info");
var analysisButton = document.getElementById("analysis");

window.onmousemove = function (e) {
    var x = (e.clientX + 20) + 'px',
        y = (e.clientY + 20) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};

themeButton.addEventListener("click",(e) =>{
    e.preventDefault();
    location.replace("themePage.html");
});

infoButton.addEventListener("click", (e) => {
    e.preventDefault();
    location.replace("infoPage.html");
});

analysisButton.addEventListener("click", (e) => {
    e.preventDefault();
    location.replace("analysis.html");
});