function checkISBN(numbers) {

	var eingabe = String(numbers);
	let zifferArray = [];

	eingabe = eingabe.split('-').join("");

	for (var i = 0; i <= 9; i++) {
		var ziffer = eingabe.charAt(i);
		var umwandeln = parseInt(ziffer);
		zifferArray.push(umwandeln);
	}

	var x = eingabe.search("x");
	if (x !== -1) {
		zifferArray[9] = 10;
	}

	var ueberpruefen = 0;
	for (var i = 0; i < 9; i++) {
		ueberpruefen = ((i + 1) * zifferArray[i]) + ueberpruefen;
	}

	var pruefziffer = ueberpruefen % 11;

	if (pruefziffer === zifferArray[9]) {
		if (pruefziffer === 10) {
			return "x";
		} else if (pruefziffer === 0) {
			return "";
		}
	}

	return pruefziffer.toString();

}



module.exports = { checkISBN };