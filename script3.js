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

menuKnop.addEventListener("click",toonMenu);

let mainGedeelte = document.querySelector("main");
function verbergMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";
	} else {
		navMenu.style.display = "flex";
	}
}
mainGedeelte.addEventListener("click",verbergMenu);
