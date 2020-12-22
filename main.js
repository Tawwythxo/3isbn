const { checkISBN } = require('./checkISBN')

function isISBNValid() {
	const eingabe = document.getElementById('isbn').value;
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
	if (isISBNValid() === "OK") {
		 korrekt = "ISBN OK"
		document.getElementById("result").style.color = "green";
		document.getElementById("gueltigkeit").value = korrekt;
	} else {
		korrekt = "ISBN corrupt"
		document.getElementById("result").style.color = "red";
		document.getElementById("gueltigkeit").value = korrekt;
	}
	return korrekt;
}

function ergebnis() {
	isISBNValid(); 
	berechne();
}

const button = document.querySelector('#berechne');
button.addEventListener('click', ergebnis);
