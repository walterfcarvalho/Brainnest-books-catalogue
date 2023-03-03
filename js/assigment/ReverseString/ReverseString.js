export default class ReverseString {

  constructor(str) {
    this.str = str || '';
  }

  reverse = () => this.str.split("").reverse().join("");
}