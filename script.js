import '~node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { encrypt as encryptCaesar } from './cesar-chiper';
import { encrypt as encryptVigenere } from './vigenere';
import { encrypt as encryptVernam } from './vernam-chiper';

function caesarChiperInit() {
	$("#caesar-chiper").on('submit', async (e) => {
		e.preventDefault();
		let obj = {};
		let fm = new FormData(e.target);
		for (var pair of fm.entries()) {
			obj[pair[0]] = pair[1];
		}


		let result = encryptCaesar(Number(obj.key), obj.plain);


		let table = $("<table class='table table-bordered text-center'></table>");

		let trPlain = $("<tr><td>Char Plain</td></tr>");
		result.chiperChars.forEach( async(o) => {
			await trPlain.append($(`<td>${o?.plainChar}</td>`));
		});
		await table.append(trPlain);

		let trPlainIndex = $("<tr><td>Plain Index</td></tr>");
		result.chiperChars.forEach( async(o) => {
			await trPlainIndex.append($(`<td>${o?.plainIndex}</td>`));
		});
		await table.append(trPlainIndex);

		let trChiperIndex = $("<tr><td>Chiper Index</td></tr>");
		result.chiperChars.forEach( async(o) => {
			await trChiperIndex.append($(`<td>${o?.chiperIndex}</td>`));
		});
		await table.append(trChiperIndex);

		let trChiperChar = $("<tr><td>Chiper Char</td></tr>");
		result.chiperChars.forEach( async(o) => {
			await trChiperChar.append($(`<td>${o?.chiperChar}</td>`));
		});
		await table.append(trChiperChar);


		trPlainIndex = $("<tr><td>Decrypt</td></tr>");
		result.chiperChars.forEach( async(o) => {
			await trPlainIndex.append($(`<td>${o?.plainIndex}</td>`));
		});
		await table.append(trPlainIndex);

		$(e.target).find(".result-box").empty();
		$(e.target).find(".result-box").append(table);
	});
}


function vigenerChiperInit() {
	$("#vigenere-chiper").on('submit', async (e) => {
		e.preventDefault();
		let obj = {};
		let fm = new FormData(e.target);
		for (var pair of fm.entries()) {
			obj[pair[0]] = pair[1];
		}


		let result = encryptVigenere(obj.key, obj.plain);


		let table = $("<table class='table table-bordered text-center'></table>");

		let trPlain = $("<tr><td>Plain Char</td></tr>");
		result.chiperChars.plainNum.forEach( async(o) => {
			await trPlain.append($(`<td>${o?.char}</td>`));
		});
		await table.append(trPlain);

		let trPlainIndex = $("<tr><td>Plain Char</td></tr>");
		result.chiperChars.plainNum.forEach( async(o) => {
			await trPlainIndex.append($(`<td>${o?.num}</td>`));
		});
		await table.append(trPlainIndex);


		let trKeyIndex = $("<tr><td>Chiper Index</td></tr>");
		result.chiperChars.plainNum.forEach( async(o) => {
			await trKeyIndex.append($(`<td>${o?.keyNum}</td>`));
		});
		await table.append(trKeyIndex);


		let trChiperIndex = $("<tr><td>Chiper Index</td></tr>");
		result.chiperChars.chiperKey.forEach( async(o) => {
			await trChiperIndex.append($(`<td>${o}</td>`));
		});
		await table.append(trChiperIndex);
		// ###
		let trChiperChar = $("<tr><td>Chiper Char</td></tr>");
		result.chiperChars.chiperChar.forEach( async(o) => {
			await trChiperChar.append($(`<td>${o}</td>`));
		});
		await table.append(trChiperChar);

		$(e.target).find(".result-box").empty();
		$(e.target).find(".result-box").append(table);
	});
}


function vernamChiperInit() {
	$("#vernam-chiper").on('submit', async (e) => {
		e.preventDefault();
		let obj = {};
		let fm = new FormData(e.target);
		for (var pair of fm.entries()) {
			obj[pair[0]] = pair[1];
		}


		let result = encryptVernam(obj.key, obj.plain);


		let table = $("<table class='table table-bordered text-center'></table>");

		let trPlain = $("<tr><td>Plain Char</td></tr>");
		result.plainArr.forEach( async(o) => {
			await trPlain.append($(`<td>${o?.char}</td>`));
		});
		await table.append(trPlain);

		let trDecimal = $("<tr><td>Decimal ASCII</td></tr>");
		result.plainArr.forEach( async(o) => {
			await trDecimal.append($(`<td>${o?.decimal}</td>`));
		});
		await table.append(trDecimal);


		let trBinerPlain = $("<tr><td>Binary Plain</td></tr>");
		result.plainArr.forEach( async(o) => {
			await trBinerPlain.append($(`<td>${o?.binary}</td>`));
		});
		await table.append(trBinerPlain);


		let trPlainKey = $("<tr><td>Plain Key</td></tr>");
		result.plainArr.forEach( async(o) => {
			await trPlainKey.append($(`<td>${o?.keyObj?.char}</td>`));
		});
		await table.append(trPlainKey);

		let trDecimalKey = $("<tr><td>Decimal Key</td></tr>");
		result.plainArr.forEach( async(o) => {
			await trDecimalKey.append($(`<td>${o?.keyObj?.decimal}</td>`));
		});
		await table.append(trDecimalKey);

		let trBinerKey = $("<tr><td>Binary Key</td></tr>");
		result.plainArr.forEach( async(o) => {
			await trBinerKey.append($(`<td>${o?.keyObj?.binary}</td>`));
		});
		await table.append(trBinerKey);

		// ###
		let trChiperBinary = $("<tr><td>Chiper Binary</td></tr>");
		result.binary.forEach( async(o) => {
			await trChiperBinary.append($(`<td>${o}</td>`));
		});
		await table.append(trChiperBinary);

		$(e.target).find(".result-box").empty();
		$(e.target).find(".result-box").append(table);
	});
}

caesarChiperInit();
vigenerChiperInit();
vernamChiperInit();