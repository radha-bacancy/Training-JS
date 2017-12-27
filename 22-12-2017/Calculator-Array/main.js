var srno=1;
var arr = [];
function generateResult(ar){
	for(var k=srno-1; k<ar.length; k++){
		var result = ar[k].split(" ");
		var res;
		if(result[1] === '+'){
			res = parseInt(result[0]) + parseInt(result[2]);
		}
		else if(result[1] === '-'){
			res = parseInt(result[0]) - parseInt(result[2]);
		}
		else if(result[1] === '*'){
			res = parseInt(result[0]) * parseInt(result[2]);
		}
		else{
			res = parseInt(result[0]) / parseInt(result[2]);
		}
		var tab = document.getElementById("t1");
		tab.style.display = "";
		var rw = tab.insertRow(-1);
		var c0 = rw.insertCell(0);
		c0.innerHTML = srno;
		var c1 = rw.insertCell(1);
		c1.innerHTML = ar[k];
		var c2 = rw.insertCell(2);
		c2.innerHTML = res;
		srno++;
	}
}
function Reset(){
	document.getElementById("Num1").value ="";
	document.getElementById("Num2").value ="";
}
function calc(a){
	var n1 = document.getElementById("Num1");
	var n2 = document.getElementById("Num2");
	var x;
	x = a;
	switch (x){
		case '+' :	var strn = parseInt(n1.value) + ' + ' + parseInt(n2.value);
					arr.push(strn);
					console.log(arr);
					Reset();
					break;
		case '-' :	var strn = parseInt(n1.value) + ' - ' + parseInt(n2.value);
					arr.push(strn);
					console.log(arr);
					Reset();
					break;
		case '*' :	var strn = parseInt(n1.value) + ' * ' + parseInt(n2.value);
					arr.push(strn);
					console.log(arr);
					Reset();
					break;
		case '/' :	var strn = parseInt(n1.value) + ' / ' + parseInt(n2.value);
					arr.push(strn);
					console.log(arr);
					Reset();
					break;
		default :	alert("Please Retry");
					break;
	}
	generateResult(arr);	
}