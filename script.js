let menuKnop = document.querySelector(".menu");
let navMenu = document.querySelector("nav");
let mainGedeelte = document.querySelector("main");
function verbergMenu() {
	navMenu.classList.add("onzichtbaar");
}
mainGedeelte.addEventListener("click",verbergMenu);
function toonMenu() {
	navMenu.classList.remove("onzichtbaar");
}
menuKnop.addEventListener("click",toonMenu);
