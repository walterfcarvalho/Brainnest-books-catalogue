export default class AnalizeArray {
  constructor(arr) {
    this.arr = arr;
  }

  getArr = () => this.arr;

  get = () => {
    return {
      length: this.arr.length,
      min: this.min(),
      max: this.max(),
      average: this.average()
    }
  }

  length = () => this.arr.length();

  min = () => this.arr.sort((a, b) => (b > a) ? -1 : 1)[0];

  max = () => this.arr.sort((a, b) => (b > a) ? -1 : 1)[this.arr.length - 1];

  average = () => this.arr.reduce((a, c) => a + c, 0) / this.arr.length; w
}