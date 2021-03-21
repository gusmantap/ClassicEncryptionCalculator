import { expect } from '@jest/globals';
import { decrypt, encrypt, getChar, getIndexChar } from '../cesar-chiper';

it('index num to char', () => {
	expect(getChar(0)).toBe('a');
	expect(getChar(3)).toBe('d');
	expect(getChar(26)).toBeFalsy();
	expect(getChar(100)).toBeFalsy();
});

it('get index num from char', () => {
	expect(getIndexChar('a')).toBe(0);
	expect(getIndexChar('d')).toBe(3);
	expect(getIndexChar(26)).toBeFalsy();
	expect(getIndexChar(100)).toBeFalsy();
});


it('encrypt', () => {
	expect(encrypt(3, 'bagus manto nafi').fullstr).toBe('edjxv pdqwr qdil');
	expect(encrypt(5, 'bagus manto nafi').fullstr).toBe('gflzx rfsyt sfkn');
});

it('decrypt', () => {
	expect(decrypt(3, 'edjxv pdqwr qdil').fullstr).toBe('bagus manto nafi');
	expect(decrypt(5, 'gflzx rfsyt sfkn').fullstr).toBe('bagus manto nafi');
});