function expandDiv(id) {

	var elements_nl = document.getElementsByClassName("box");

	var elements_array = Array.prototype.slice.call(elements_nl); // array of all elements with class name "title"


	for (var i = 0; i < elements_array.length; i++) {
		

		if (elements_array[i].id == id) {
			elements_array.splice(i, 1);
		}
	}
	
	document.getElementById(id).style.height = "50vw";
	document.getElementById(id).style.width = "50vw";

	changePosition(elements_array);
}

function changePosition(array) {
	for (var i = 0; i < array.length; i++) {
		document.getElementById(array[i].id).style = "float: right";
	}
}
