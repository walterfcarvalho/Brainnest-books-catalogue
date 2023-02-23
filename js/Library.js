const defaultLibrary = `[{"title":"bo!!","pages":10,"author":"Tolkien","isRead":false},{"title":"book2","pages":20,"author":"Douglas Adams","isRead":false}]`;

import Book from './Book.js'

const key = "bookList";

export default class Library  {
  
  constructor () {
    this.books = this.loadBooks();
  }

  loadBooks = () => {
    let bookObj = JSON.parse( defaultLibrary || localStorage.getItem(key));

    return bookObj?.map( b => new Book( b.title, b.pages, b.author) );
  }
  
  getBooks = () => this.books;

  add = (title, pages, author) => {
    const book = new Book(title, pages, author);
    this.books.push(book);
    this.persist();
  }

  persist = () => localStorage.setItem(key, JSON.stringify(this.books));
}
