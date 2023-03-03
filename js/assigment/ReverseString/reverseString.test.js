import ReverseString from './ReverseString';

describe('Capitalize Test', () => {
  
  test('Test reverse string', () => {
    let reverse = new ReverseString("abcdef");
    expect( reverse.reverse()).toBe("fedcba");
  })
  
  test('Test reverse empty string', () => {
    let reverse = new ReverseString("");
    expect( reverse.reverse()).toBe("");
  })

})
