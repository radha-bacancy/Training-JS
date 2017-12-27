var obj = [];
function addDetails(){
	var tab = document.getElementById("t2");
	var rw = tab.insertRow(-1);
	var c0 = rw.insertCell(0);
	var c1 = rw.insertCell(1);
	var c2 = rw.insertCell(2);
	var c3 = rw.insertCell(3);
	var firstname = document.getElementById("FirstName").value;
	var lastname = document.getElementById("LastName").value;
	var a = document.getElementById("Age").value;
	var geender = document.getElementById("Gender").value;
	var obj1 = {"first_name": firstname, "last_name" : lastname, "age": a, "gender": geender}
	obj.push(obj1);
	for(var i = 0; i<obj.length; i++){
		console.log(obj[i])
		c0.innerHTML = obj[i].first_name;
		c1.innerHTML = obj[i].last_name;
		c2.innerHTML = obj[i].age;
		c3.innerHTML = obj[i].gender;
	}
}
