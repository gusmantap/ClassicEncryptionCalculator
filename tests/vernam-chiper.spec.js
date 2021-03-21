import { expect, it } from '@jest/globals';
import {encrypt, ASCII2DEC, toBinary, XORChar} from '../vernam-chiper';

it("to ascii", () => {
	expect(ASCII2DEC("b")).toBe(98);
	expect(ASCII2DEC("B")).toBe(98);
});

it('to binner', () => {
	expect(toBinary(84)).toBe('01010100');
})

// 01010100
// 01000101
// 01010011

it('encrypt1', () => {
	expect(encrypt('bali', 'bagus manto nafi')).toBe('00000000|00000000|00001011|00011100|00010001| |00001100|00001101|00000111|00010110|00001110| |00000010|00001000|00000100|00001000');
});

it('encrypt2', () => {
	expect(encrypt('b', 'TES')).toBe('00110110|00100111|00110001');
});

it('XORChar', () => {
	expect(XORChar('01001011', '01000001')).toBe('00001010');
});