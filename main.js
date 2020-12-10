const { checkISBN } = require('./checkISBN')

function berechne() {

	const eingabe = document.getElementById('isbn').value;

	const last = eingabe.slice(-1);

	//document.querySelector('#isbn').innerHTML = checkISBN(eingabe);
	if (checkISBN(eingabe) === last) {
		const korrekt = "ISBN OK";

		document.getElementById("result").style.color = "green";
		document.getElementById("gueltigkeit").value = korrekt;

	}
	else if (checkISBN(eingabe) === "") {
		const korrekt = "ISBN OK";

		document.getElementById("result").style.color = "green";
		document.getElementById("gueltigkeit").value = korrekt;
	}
	else {
		const korrekt = "ISBN corrupt";

		document.getElementById("result").style.color = "red";
		document.getElementById("gueltigkeit").value = korrekt;

	}
}

const button = document.querySelector('#berechne');
button.addEventListener('click', berechne);
