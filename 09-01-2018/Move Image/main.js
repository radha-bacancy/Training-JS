var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var imageHeight = document.getElementById("pik").style.height;
var imageWidth = document.getElementById("pik").style.width;
var Left = document.getElementById("pik").style.left;
var Top = document.getElementById("pik").style.top;
var t = parseInt(Top);
var l = parseInt(Left);
var maxH = windowHeight - parseInt(imageHeight);
var maxL = windowWidth - parseInt(imageWidth);
var a = maxH % 10;
var b = maxL%10;
maxH = (maxH-a) + 'px';
maxL = (maxL-b) + 'px';

console.log('maxH: ' + maxH + ' maxL: ' + maxL);
console.log("Window: windowHeight: " + windowHeight + " windowWidth: " + windowWidth);
console.log("Image: imageHeight: " + imageHeight + " imageWidth: " + imageWidth);
console.log("Top: " + t + " Left: " + l);

function change() {
	var x = event.key;
	if(x === "ArrowUp") {
		if (t > 0 && (l == 0 || l == parseInt(maxL))) {
			t = t - 10;
			Top = t + 'px';
			console.log("Top: " + Top + ' maxH: ' + maxH);
			document.getElementById("pik").style.top = Top;
		}
		else {
			window.alert("Cannot go more up");
		}
	}
	else if(x === "ArrowDown") {
		if (t < parseInt(maxH) && (l == 0 || l == parseInt(maxL))) {
			t = t + 10;
			Top = t + 'px';
			console.log("Top: " + Top + ' maxH: ' + maxH);
			document.getElementById("pik").style.top = Top;
		}
		else {
			window.alert("Cannot go more down");
		}
	}
	else if(x === "ArrowLeft") {
		if (l > 0 && (t == 0 || t == parseInt(maxH))) {
			l = l - 10;
			Left = l + 'px';
			document.getElementById("pik").style.left = Left;
			console.log("Left: " + Left + ' maxL: ' + maxL);
		}
		else {
			window.alert("Cannot go more Left");
		}
	}
	else if(x === "ArrowRight") {
		if (l < parseInt(maxL) && (t == 0 || t == parseInt(maxH))) {
			l = l + 10;
			Left = l + 'px';
			document.getElementById("pik").style.left = Left;
			console.log("Left: " + Left + ' maxL: ' + maxL);
		}
		else {
			window.alert("Cannot go more Right");
		}
	} else {
		window.alert("Please use anyone of the arrow keys");
	}
}