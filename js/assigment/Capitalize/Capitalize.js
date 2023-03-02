export default class Capitalize {
  constructor (str) {
    this.str = str || "";
  }

  capitalize = () => {
    return this.str ? this.str[0].toUpperCase().concat( this.str.slice(1)): "";
  }

}