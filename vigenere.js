let alpha = "abcdefghijklmnopqrstuvwxyz";

function getChar(index) {
	return alpha[index];
}

function charToNum(plain) {
	let keysChar = [];

	for (var i = 0; i < plain.length; i++) {
		keysChar.push({
			char: plain[i],
			num: alpha.indexOf(plain[i])
		});
	}

	return keysChar;
}

function numToChar(nums) {
	let char = [];
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] !== -1) {
			char.push(alpha[nums[i]]);
		} else {
			char.push(" ");
		}
	}
	return char;
}

function encrypt(keyNum, plainNum) {
	keyNum = charToNum(keyNum);
	plainNum = charToNum(plainNum);

	let chiperKey = [];
	let lengthKey = keyNum.length;

	let cIndex = 0;
	let alphaIndex = 0;
	for (var i = 0; i < plainNum.length; i++) {
		try {
			if (plainNum[i].num !== -1) {
				plainNum[i].keyNum = keyNum[cIndex].num;
				let p = plainNum[i].num;
				let c = plainNum[i].keyNum;
				let calc = p+c;
				if(calc > 26) {
					calc = calc % 26;
				}

				chiperKey.push(calc);

				if ((cIndex + 2) > lengthKey) {
					cIndex = 0;
				} else {
					cIndex++;
					alphaIndex++;
				}
			} else {
				chiperKey.push(-1);
			}
		} catch (ex) {
			console.log("err", ex, plainNum[cIndex]);
		}
	}

	let chiperChar = numToChar(chiperKey);
	let chiperText = chiperChar.join(" ");
	return {
		chiperText,
		chiperChars: {
			plainNum,
			chiperChar,
			chiperKey
		}
	};
}

// console.log('cadas', charToNum('cadas'));
// console.log('bagus', charToNum('Bagus manto nafi'));

let encrypted = encrypt("cadas", "bagus manto nafi");
console.log(encrypted);

// document.getElementById("hasil").innerHTML = "034";

export {
	encrypt
}