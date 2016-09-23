// var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(255, 255, 255)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(0, 0, 255"];
var maxColors = 6;
var colors = [];
setColors();
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("rgb");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var h1 = document.querySelector("h1");
var message = document.getElementById("message");
colorSquares();
var picked;
pickColor();
//Setup on click listeners
for (var i = 0; i < squares.length; i++) {
	//Setup onclick listeners
	squares[i].addEventListener("click", function(){
		if(this.style.background === picked){
			winner();
		}
		else {
			this.style.background = ("#232323");
			message.textContent = "Try again"
		}
	});
}

function addColor(){
	var temp = [];
	for (var i = 0; i < maxColors; i++) {
		temp.push(Math.floor(Math.random()*255));
	}
	return temp;
}

function setColors(){
	for (var i = 0; i < maxColors; i++) {
		var color = addColor();
		colors.push("rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")");
	}
}
//Color all 6 squares
function colorSquares(){
	for (var i = 0; i < maxColors; i++) {
		squares[i].style.background = colors[i];
	}
}

function pickColor(){
	picked = colors[Math.floor(Math.random()*(maxColors-1))];
	colorDisplay.textContent = picked;
}

function reset(){
	colors = [];
	setColors();
	colorSquares();
	pickColor();
	message.textContent = "";
	h1.style.background = "#07779C"
}

function winner(){
	for (var i = 0; i < maxColors; i++) {
		squares[i].style.background = picked;
	}
	h1.style.background = picked;
	message.textContent = "Correct!";
}

function easy(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	maxColors = 3;
	for (var i = 3; i < 6; i++) {
		squares[i].style.background = "#232323"
	}
	reset();
}

function hard(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	maxColors = 6;
	reset();
}