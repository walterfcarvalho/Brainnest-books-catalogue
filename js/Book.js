export default class Book {  
  constructor (title, pages, author, isRead) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.isRead = isRead;
  }

  getTitle = () => this.title;
  setTitle = (title) => this.title = title;
  getPages = () => this.pages;
  setPages = (pages) => this.pages = pages;
  getAuthor = () => this.author;
  setAuthor = (author) => this.author = author;
  toogleRead = () => this.isRead = !isRead
} 
