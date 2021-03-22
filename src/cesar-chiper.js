let alpha = "abcdefghijklmnopqrstuvwxyz";

function getChar(index) {
	let result = alpha[index];
	if(result === null) {
		return false;
	}
	return result;
}

function getIndexChar(char) {
	let result = alpha.indexOf(char);
	if(result === -1) {
		return false;
	}
	return result;
}

function encrypt(key, plain) {
	let chiperChars = [];
	let fullstr = "";
	for(let i = 0; i < plain.length; i++) {
		if(plain[i] !== " ") {
			let plainIndex = getIndexChar(plain[i]);
			let chiperIndex = plainIndex+key;

			// if large than 26. mod 26
			if(chiperIndex > 26) {
				chiperIndex = chiperIndex % 26;
			}

			let chiperChar = getChar(chiperIndex);
			chiperChars.push({plainChar: plain[i], chiperIndex, plainIndex, chiperChar});
			fullstr += chiperChar;
		} else {
			fullstr += " ";
		}
	}
	return {
		fullstr,
		chiperChars
	};
}

function decrypt(key, plain) {
	let chiperChars = [];
	let fullstr = "";
	for(let i = 0; i < plain.length; i++) {
		if(plain[i] !== " ") {

			let plainIndex = getIndexChar(plain[i]);
			let chiperIndex = plainIndex-key;

			// if large than 26. mod 26
			if(chiperIndex > -26 && chiperIndex > 26) {
				chiperIndex = chiperIndex % 26;
			}

			let chiperChar = getChar(chiperIndex);
			chiperChars.push({plainChar: plain[i], chiperIndex, plainIndex, chiperChar});
			fullstr += chiperChar;
		} else {
			fullstr += " ";
		}
	}
	return {
		fullstr,
		chiperChars
	};
}


export {
	getChar,
	encrypt,
	decrypt,
	getIndexChar
}

