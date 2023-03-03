
import Book from '../Book/Book.js'

const key = "bookList";

export default class Library {
  books = [];
  constructor () {
    this.books = this.loadBooks();
  }

  loadBooks = () => {
    let data = localStorage.getItem(key);
        
    let bookObj = JSON.parse(data);
        
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
    let count = this.getBooks();

    return count.reduce( (acc, b ) => acc + (b.isRead ? 1: 0), 0);
  } 

  add = (param_book) => {
    this.setBooks( [...this.getBooks(), param_book]);
    this.persist();
  }

  remove = (index) => {
    this.setBooks( this.getBooks().filter( book => book.id !== index ));
    this.persist();
  }
}
