import Cipher from './Cipher';

let tcipher = new Cipher(1);

test(`Test basic cipher abcz => bcda`, () => {
  expect( tcipher.cipher('abcz')).toBe('bcda');
})

test(`Test cipher undefined`, () => {
  expect( tcipher.cipher(undefined)).toBe('undefined');
})

test(`Test cipher null`, () => {
  expect( tcipher.cipher(null)).toBe('null value');
})

test(`Test unCipher null`, () => {
  expect( tcipher.unCipher(null)).toBe('null value');
})

test(`Test unCipher undefined`, () => {
  expect( tcipher.unCipher(undefined)).toBe('undefined');
})

test('Test Uncipher bcd a => abc z', () => {
  expect( tcipher.unCipher('bcd aO') ).toBe('abc zN');
})

test(`Test cipher with 2 letter case  aAbBcCzZ => bBcCdDfFaA`, () => {
  expect( tcipher.cipher('aAbBcCzZ') ).toBe('bBcCdDaA');
})

test(`Test cipher with 2 letter case   => bBcCdFaA`, () => {
  expect( tcipher.cipher('abcz') ).toBe('bcda');
})

test(`Test phase defend the east wall of the castle => efgfoe uif fbtu xbmm pg uif dbtumf`, () => {
  expect( tcipher.cipher('defend the east wall of the castle') ).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
})

test('Test swift() ', () => { 
  tcipher.setSwift(200);
  expect( tcipher.getSwift() ).toBe(200);
})
