// const defaultLibrary = `[{"title":"bo!!","pages":10,"author":"Tolkien","isRead":false},{"title":"book2","pages":20,"author":"Douglas Adams","isRead":false}]`;
const defaultLibrary = undefined;

import Book from './Book.js'

const key = "bookList";

export default class Library {
  
  constructor () {
    this.books = this.loadBooks();
  }

  loadBooks = () => {
    let bookObj = JSON.parse( defaultLibrary || localStorage.getItem(key));

    return bookObj ? bookObj.map( b => new Book(b)): [];
  }
  
  getBooks = () => this.books;
  persist = () => localStorage.setItem(key, JSON.stringify(this.books));
  getTotalRead = () => {
    let iniValue = 0;
    return this.getBooks().reduce( 
      (acc, b ) =>  acc + (b.isRead ? 1: 0)
      , iniValue
    )
  } 


  add = (param_book) => {
    let book = new Book(param_book);
    this.books.push(book);
    this.persist();
  }

}
