// var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(255, 255, 255)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255"];
var colors = [];
setColors();
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("rgb");
colorSquares();
var picked;
pickColor();
//Setup on click listeners
for (var i = 0; i < squares.length; i++) {
	//Setup onclick listeners
	squares[i].addEventListener("click", function(){
		if(this.style.background === picked){
			alert("Correct!")
		}
		else {
			this.style.background = ("#232323");
		}
	});
}

function addColor(){
	var temp = [];
	for (var i = 0; i < 3; i++) {
		temp.push(Math.floor(Math.random()*255));
	}
	return temp;
}

function setColors(){
	for (var i = 0; i < 6; i++) {
		var color = addColor();
		colors.push("rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")");
	}
}
//Color all 6 squares
function colorSquares(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
}

function pickColor(){
	picked = colors[Math.floor(Math.random()*5)];
	colorDisplay.textContent = picked;
}

function reset(){
	colors = [];
	setColors();
	colorSquares();
	pickColor();
}