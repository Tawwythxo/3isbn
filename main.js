const { checkISBN } = require('./checkISBN')

function input() {
	var input1 = String(document.getElementById("isbn").value);
	var input2 = String(document.getElementById("isbn2").value);
	var input3 = String(document.getElementById("isbn3").value);
	var input4 = String(document.getElementById("isbn4").value);

	var inputComplete = [];
	inputComplete[0] = input1;
	inputComplete[1] = input2;
	inputComplete[2] = input3;
	inputComplete[3] = input4;

	const eingabe = inputComplete.join("");
	return eingabe;
}

function isISBNValid() {
	const eingabe = input();
	const last = eingabe.slice(-1);

	const pruefziffer = checkISBN(eingabe)
	if (pruefziffer === last || pruefziffer === '') {
		return "OK"
	}
	else {
		return "corrupt"
	}
}

function berechne() {
	var korrekt;
	const laengeEingabe = input().length;

	if (isISBNValid() === "OK" && laengeEingabe === 10) {
		korrekt = "ISBN OK"
		document.getElementById("result").style.color = "green";
		document.getElementById("gueltigkeit").value = korrekt;
	} else if (isISBNValid() === "corrupt" && laengeEingabe === 10) {
		korrekt = "ISBN corrupt"
		document.getElementById("result").style.color = "red";
		document.getElementById("gueltigkeit").value = korrekt;
	} else if (isISBNValid() === "corrupt" && laengeEingabe < 10) {
		korrekt = ""
		document.getElementById("gueltigkeit").value = "";

	}
	return korrekt;
}

function backToLastField() {
	isbn2.onkeydown = function (event) {
		var key = event.keyCode || event.charCode;

		if ((key == 8 || key == 46) && isbn2.value.length == 0) {
			document.getElementById("isbn").focus();
		}
	}

	isbn3.onkeydown = function (event) {
		var key = event.keyCode || event.charCode;

		if ((key == 8 || key == 46) && isbn3.value.length == 0) {
			document.getElementById("isbn2").focus();
		}
	}

	isbn4.onkeydown = function (event) {
		var key = event.keyCode || event.charCode;

		if ((key == 8 || key == 46) && isbn4.value.length == 0) {
			document.getElementById("isbn3").focus();

		}
	}
}

function nextField() {
	isbn.onkeyup = function (event) {
		if (isbn.value.length == 1) {
			document.getElementById("isbn2").focus();
		}
	}

	isbn2.onkeyup = function (event) {
		if (isbn2.value.length == 3) {
			document.getElementById("isbn3").focus();
		}
	}

	isbn3.onkeyup = function (event) {
		if (isbn3.value.length == 5) {
			document.getElementById("isbn4").focus();
		}
	}
}

function placeholder() {
	var pruefziffer = checkISBN(input())
	if (pruefziffer === "10") {
		pruefziffer = "x";
	} 
	if (document.getElementById('isbn3').value.length === 5) {
		document.getElementById('isbn4').placeholder = pruefziffer;
	}
	else {
		document.getElementById('isbn4').placeholder = "Nr";
	}
}

function ergebnis() {
	input();
	nextField();
	backToLastField();
	isISBNValid()
	placeholder();
	berechne();
}


const feedback = document.querySelector('#isbn')
feedback.addEventListener('input', ergebnis)

const feedback2 = document.querySelector('#isbn2')
feedback2.addEventListener('input', ergebnis)

const feedback3 = document.querySelector('#isbn3')
feedback3.addEventListener('input', ergebnis)

const feedback4 = document.querySelector('#isbn4')
feedback4.addEventListener('input', ergebnis)
