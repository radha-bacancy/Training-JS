//Obtaining window's dimensions
var windowHeight = window.innerHeight - 10;
var windowWidth = window.innerWidth - 10;

//Obtaining image's dimensions
var imageHeight = parseInt(document.getElementById("pik").style.height);
var imageWidth = parseInt(document.getElementById("pik").style.width);

//Logging the dimensions of image and window
console.log("Window: windowHeight: " + windowHeight + " windowWidth: " + windowWidth);
console.log("Image: imageHeight: " + imageHeight + " imageWidth: " + imageWidth);

//Resizing the image
function change() {
	var x = event.key;
	if(x === "ArrowUp") {
		if (imageWidth < windowHeight) {
			imageHeight = imageHeight + 10;
			document.getElementById("pik").style.height = imageHeight + 'px';
			imageWidth = imageWidth + 10;
			document.getElementById("pik").style.width = imageWidth + 'px';
		}
	}
	else if(x === "ArrowDown") {
		if (imageWidth > 0) {
			imageHeight = imageHeight - 10;
			document.getElementById("pik").style.height = imageHeight + 'px';
			imageWidth = imageWidth - 10;
			document.getElementById("pik").style.width = imageWidth + 'px';
		}
	}
}
