export default class Cipher {
  static letters = 'abcdefghijklmnopqrstuvwxyz';

  constructor(swift) {
    this.swift = swift;
  }

  setSwift = (swift) => this.swift = swift;
  getSwift = () => this.swift;

  cipher(phrase) {
    if (phrase === undefined ) {
      return "undefined"
    }
    if (phrase === null ) {
      return "null value"
    }

    let res = phrase.split("").map(function (char) {
      let idx = Cipher.letters.indexOf(char.toLowerCase())

      if (idx < 0) {
        return char;
      } else {
        idx += this.swift;

        if (idx > Cipher.letters.length - 1) {
          idx -= (Cipher.letters.length)
        }

        return char.toLowerCase() == char
          ? Cipher.letters[idx]
          : Cipher.letters[idx].toUpperCase();
      }
    }, this);
    res = res.join("");
    return res
  }

  unCipher(phrase) {
    if (phrase === undefined ) {
      return "undefined"
    }
    if (phrase == null ) {
      return "null value"
    }

    let res = phrase.split("").map(function (char) {
      let idx = Cipher.letters.indexOf(char.toLowerCase())

      if (idx < 0) {
        return char;
      } else {
        idx -= this.swift;

        if (idx < 0) {
          idx += (Cipher.letters.length)
        }

        return char.toLowerCase() == char
          ? Cipher.letters[idx]
          : Cipher.letters[idx].toUpperCase();
      }
    }, this);
    res = res.join("");
    return res
  }
}
