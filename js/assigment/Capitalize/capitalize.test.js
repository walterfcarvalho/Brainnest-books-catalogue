import Capitalize from './Capitalize';

let msg = new Capitalize('a sample text');

describe('Capitalize Test', () => {
  test('Test receive the first letter capitalized', () => {
    expect(msg.capitalize()). toBe('A sample text');
  });
  
  test('Test receive empty', () => {
      let msg = new Capitalize('');
      expect(msg.capitalize()). toBe('');
  });
})