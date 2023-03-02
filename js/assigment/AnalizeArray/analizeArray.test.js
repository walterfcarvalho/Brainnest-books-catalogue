import AnalizeArray from './AnalizeArray';

const arr = [1, 8, 3, 4, 2, 6];

let myArray = new AnalizeArray(arr);

describe('AnalizeArray test suite', () => {

  test('Test iniciate array', () => {
    expect(myArray.getArr()).toStrictEqual(arr);
  })

  test('test max() == 8', () => {
    expect(myArray.max()).toBe(8);
  })

  test('test min() == 1', () => {
    expect(myArray.min()).toBe(1);
  })

  test('Test array values', () => {
    expect(myArray.get())
      .toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
  })
})