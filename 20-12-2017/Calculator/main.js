function calc(a)
{
	var n1=document.getElementById("Num1");
	var n2=document.getElementById("Num2");
	var x;
	x = a;
	switch (x)
	{
		case '+' :	var n3 = parseInt(n1.value) + parseInt(n2.value);
					alert(n3);
					break;
		case '-' :	var n3 = parseInt(n1.value) - parseInt(n2.value);
					alert(n3);
					break;
		case '*' :	var n3 = parseInt(n1.value) * parseInt(n2.value);
					alert(n3);
					break;
		case '/' :	var n3 = parseInt(n1.value) / parseInt(n2.value);
					alert(n3);
					break;
		default :	alert("Please Retry");
					break;
	}
}
