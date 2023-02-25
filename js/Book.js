export default class Book {  
  id = "";
  title = "";
  pages = 0;
  author = ""
  isRead = false;

  constructor (book) {
    this.id = book.id;
    this.title = book.title;
    this.pages = book.pages;
    this.author = book.author;
    this.isRead = book.isRead;
  }
  
  getId = () => this.id;
  setId = (id) => this.id = id;
  getTitle = () => this.title;
  setTitle = (title) => this.title = title;
  getPages = () => this.pages;
  setPages = (pages) => this.pages = pages;
  getAuthor = () => this.author;
  setAuthor = (author) => this.author = author;
  getIsRead = () => this.isRead;
  setIsRead = (isRead) => this.isRead;
  toogleRead = () => this.isRead = !this.isRead;
} 
