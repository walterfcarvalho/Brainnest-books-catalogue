import Capitalize from './Capitalize';

let msg = new Capitalize('a sample text');

describe('Capitalize Test', () => {
  test('Test receive the first letter capitalized', () => {
    expect(msg.capitalize()). toBe('A sample text');
  });
  
  test('Test receive the all in uppercase, return ', () => {
    let msg2 = new Capitalize('SAMPLE text');
    expect(msg2.capitalize()). toBe('Sample Text');
  });
  
  test('Test receive empty, return empty', () => {
      let msg = new Capitalize('');
      expect(msg.capitalize()). toBe('');
  });
})