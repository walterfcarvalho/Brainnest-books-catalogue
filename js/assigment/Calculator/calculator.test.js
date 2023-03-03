import Calculator  from './Calculator.js'

let calc = new Calculator();

describe('Sum Test', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(calc.sum(1, 2)).toBe(3);
  })
  
  test('Sum Test 0', () =>{
    expect(calc.sum(0,0)).toBe(0);
  })

  test('Sum Test null', () =>{
      expect(calc.sum(null,null)).toBe(0);
  })
  
  test('Test of text', () =>{
      expect(calc.sum('a','b')).toBe('ab');
  })
});

describe('Sub Test',() =>{
  test('Two numbers sub', () =>{
    expect(calc.sub(-5,5)).toBe(-10);
  })
  
  test('0 sub', () =>{
    expect(calc.sub(0,0)).toBe(0);
  })

  test('Null sub', () =>{
      expect(calc.sub(null,null)).toBe(0);
  })
  
  test('Sub with text', () =>{
      expect(calc.sub('a','b')).toBe(NaN);
  })
});

describe('Multiplication Test', () => {
    
  test('2 numbers mult', () =>{
      expect(calc.multiply(1,2)).toBe(2);
  })
  
  test('Mult with 0', () =>{
      expect(calc.multiply(0,0)).toBe(0);
  })

  test('Mult null', () =>{
      expect(calc.multiply(null,null)).toBe(0);
  })

  test('Mult with text', () =>{
      expect(calc.multiply('a','b')).toBe(NaN);
  })

});

describe('Division Test', () => {
    
  test('2 numbers division', () =>{
      expect(calc.division(10,2)).toBe(5);
  })
  
  test('Divisao de 0', () =>{
      expect(calc.division(0,0)).toBe(NaN);
  })

  test('null division', () =>{
      expect(calc.division(null,null)).toBe(NaN);
  })

  test('Division with text', () =>{
      expect(calc.division('a','b')).toBe(NaN);
  })

});
