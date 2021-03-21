function encrypt(keyText, plainText) {
	let chiperText = '';
	let plainArr = [];
	let keyArr = [];

	// convert key first
	for(let i = 0; i < keyText.length; i++) {
		let convertedKey = convertEncrypt(keyText[i]);
		keyArr.push(convertedKey);
	}

	let keyIndex = 0;
	// convert plain
	for(let i = 0; i < plainText.length; i++) {
		if(plainText[i] != ' ') {
			let convertedPlain = convertEncrypt(plainText[i]);
			convertedPlain.keyObj = keyArr[keyIndex];
			plainArr.push(convertedPlain);

			if((keyIndex+2) > keyText.length) {
				keyIndex = 0;
			} else {
				keyIndex++;
			}
		} else {
			plainArr.push({char: ' '});
		}
	}
	// convert XOR
	let result = XORCalc(plainArr);

	return {
		plainArr,
		keyArr,
		binary: result,
		fullstr: result.join('|')
	}
}

function XORCalc(charObj) {
	let arr = [];
	for(let i = 0; i < charObj.length; i++) {
		if(charObj[i].char !== ' ') {
			let cConverted = XORChar(charObj[i].keyObj.binary, charObj[i].binary);
			arr.push(cConverted);
		} else {
			arr.push(' ');
		}
	}
	return arr;
}

function XORChar(keyCharBinary, plainCharBinary) {
	let binaryChiper = '';
	for(let i = 0; i < 8; i++) {
		binaryChiper += plainCharBinary[i] ^ keyCharBinary[i];
	}
	return binaryChiper;
}


function ASCII2DEC(char) {
	return char.charCodeAt(0);
}

function toBinary(dec) {
	let binerString = Number(dec).toString(2);

	for(let i = 0; i < Math.abs(binerString.length-8); i++) {
		binerString = '0'+binerString;
	}
	return binerString;
}

function convertEncrypt(char) {
	let decimal = ASCII2DEC(char);
	return {
		char: char,
		decimal,
		binary: toBinary(decimal)
	}
}

function convertDecrypt() {

}

function decrypt(key, chiperText) {
	let plain = '';
	return plain;
}

export {
	encrypt,
	decrypt,
	ASCII2DEC,
	toBinary,
	XORChar
}