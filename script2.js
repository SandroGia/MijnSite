var routine = [-500,-1000,-500,0]
var teller = 0;

var main = function() {
      var imgs = document.getElementsByClassName("img");
      var i = 0;
      while (i < imgs.length) {
             imgs[i].style.transform = "translatex(" + routine[teller] + "px)";
             i++;
      }
       teller++;
      if (teller === routine.length) {teller = 0};
}

setInterval(main, 5000);

var mijnImg = document.getElementsByClassName("hover");

var i = 0;
while(i<mijnImg.length){
mijnImg[i].onmouseover = function(){
 var deVoorkant = this.getAttribute("src");
 this.setAttribute("src",this.getAttribute("data-rug"));
 this.setAttribute("data-rug", deVoorkant);
}
mijnImg[i].onmouseout = function(){
  var deAchterkant = this.getAttribute("src");
  this.setAttribute("src", this.getAttribute("data-rug"));
  this.setAttribute("data-rug", deAchterkant);
}
i++;
}

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
