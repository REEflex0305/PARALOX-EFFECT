//SELECTIONS


let stars = document.getElementById("stars");

let moon = document.getElementById("moon");

let mountbehind = document.getElementById("mountbehind");

let text = document.getElementById("text");

let mountfront = document.getElementById("mountfront");



//EVENT LISTENERS


window.addEventListener("scroll", function () {
    let value = this.window.scrollY;
    stars.style.left = value *0.05+ "px";
    moon.style.top = value *1.5+ "px";
    mountbehind.style.top = value *0.7+ "px";
    mountfront.below.left = value *0+ "px";
});






