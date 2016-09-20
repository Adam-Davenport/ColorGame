var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(255, 255, 255)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255"];

var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("rgb");
var picked = colors[3];
colorDisplay.textContent = picked;

for (var i = 0; i < squares.length; i++) {
	//Color the squares
	squares[i].style.background = colors[i];
	//Setup onclick listeners
	squares[i].addEventListener("click", function(){
		if(this.style.background === picked){
			alert("Correct!")
		}
		else {
			alert("Incorrect");
		}
	});
}