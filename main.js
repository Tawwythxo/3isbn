const { checkISBN } = require('./checkISBN')

function berechne() {
	const eingabe = document.getElementById('isbn').value;
	document.querySelector('#isbn').innerHTML = checkISBN(eingabe);
	if (checkISBN(eingabe) === "ISBN OK") {
		document.getElementById("result").style.color = "green";
		document.getElementById("gueltigkeit").value = checkISBN(eingabe);

	}
	else {
		document.getElementById("result").style.color = "red";
		document.getElementById("gueltigkeit").value = checkISBN(eingabe);
	}
}


window.onload = function () {
	document.getElementById("isbn").onchange = berechne;
};