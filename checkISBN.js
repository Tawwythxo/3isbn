function checkISBN(numbers) {

	var eingabe = String(numbers);
	var x = eingabe.search("x");
	var bindestrich = eingabe.search("-");

	if (bindestrich !== -1) {
		var stSplit = eingabe.split('-');
		eingabe = stSplit.join("");
	}



	var zifferArray = [];
	var umwandeln;

	for (var i = 0; i <= 9; i++) {
		var ziffer = eingabe.charAt(i);
		umwandeln = parseInt(ziffer);
		zifferArray[i] = umwandeln;
	}

	if (x !== -1) {
		zifferArray[9] = 10;
	}



	var ueberpruefen = 0;

	for (var i = 0; i < 9; i++) {
		ueberpruefen = ((i + 1) * zifferArray[i]) + ueberpruefen;
	}

	var pruefziffer = ueberpruefen % 11;
	var korrekt;

	if (pruefziffer === zifferArray[9]) {
		pruefziffer = String(pruefziffer);

		if (x !== -1) {
			pruefziffer = "x";

		} else if (pruefziffer === "0") {
			pruefziffer = "";

		} else { }


	} else {
		pruefziffer = String(pruefziffer);
	}

	return pruefziffer;

}


module.exports = { checkISBN };