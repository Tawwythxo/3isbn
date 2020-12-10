const { checkISBN } = require('./checkISBN')

function berechne() {
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


	const last = eingabe.slice(-1);
	const ergebnisLeer = "";
	const laengeEingabe = eingabe.length;
	const ergebnis = checkISBN(eingabe);


	if (ergebnis === last && laengeEingabe === 10) {
		const korrekt = "ISBN OK";

		document.getElementById("result").style.color = "green";
		document.getElementById("gueltigkeit").value = korrekt;

	}
	else if (ergebnis === ergebnisLeer && laengeEingabe === 10) {
		const korrekt = "ISBN OK";

		document.getElementById("result").style.color = "green";
		document.getElementById("gueltigkeit").value = korrekt;

	}
	else if (ergebnis !== last && laengeEingabe === 10) {
		const korrekt = "ISBN corrupt";

		document.getElementById("result").style.color = "red";
		document.getElementById("gueltigkeit").value = korrekt;

	}
	else if (ergebnis !== last && laengeEingabe < 10)
	{
		document.getElementById("gueltigkeit").value = "";

	}

}



isbn.onkeyup = function (event) {
	var key = event.keyCode || event.charCode;

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





window.onload = function () {
	document.getElementById("isbn").onchange = berechne;
	document.getElementById("isbn2").onchange = berechne;
	document.getElementById("isbn3").onchange = berechne;
	document.getElementById("isbn4").onchange = berechne;
};
