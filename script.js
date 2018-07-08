// How do you assign a value to the background-color property so it is read as a hexadecimal (and NOT a string)?
// Is there a better way to assign a color value to a div?
// Could we assign colors using the RGB code?


const canvas = document.querySelector('.square-container');
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
//var colors = ['50DCA7', '8AD5EC', 'F0A4B1', '31438B', 'F24F44', '3D3258', 'FF750D', '0679B0', 'BE91C9', '98D56A', 'FFD40C', 'EBEA4D', '006D29', '212123', '222849', '272525', '1C1B21'];
//var colors = [#50DCA7, #8AD5EC, #F0A4B1, #31438B, #F24F44, #3D3258, #FF750D, #0679B0, #BE91C9, #98D56A, #FFD40C, #EBEA4D, #006D29, #212123, #222849, #272525, #1C1B21];


function randomNumber() {
	// Mozilla Developer Network documentation for Math.random() and Math.floor()
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
	x = (colors.length * Math.random());
	return Math.floor(x);
}
			
function createAndColor() {
	const newDiv = document.createElement('div');
	newDiv.classList.add('pixel');
	newDiv.style.backgroundColor = colors[randomNumber()];
	canvas.appendChild(newDiv);
}

for (i = 1; i <= 100; i++) {
	createAndColor();
}