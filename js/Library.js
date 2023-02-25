const defaultLibrary = undefined;

import Book from './Book.js'

const key = "bookList";

export default class Library {
  books = [];
  constructor () {
    this.books = this.loadBooks();
  }

  loadBooks = () => {
    let bookObj = JSON.parse( defaultLibrary || localStorage.getItem(key));

    return bookObj ? bookObj.map( b => {
      return new Book(b)
    }): [];
  }
  
  getBooks = () => this.books;
  setBooks = (books) => this.books = books; 
  persist = () => {
    localStorage.setItem(key, JSON.stringify(this.getBooks()));
  }
  getTotalRead = () => {
    let iniValue = 0;
    return this.getBooks().reduce( 
      (acc, b ) =>  acc + (b.isRead ? 1: 0)
      , iniValue
    )
  } 


  add = (param_book) => {
    // let book = new Book(param_book);
    this.setBooks( [...this.getBooks(), param_book]);
    // this.books.push(book);
    this.persist();
  }

}
