import Library from './Library';
import Book from '../Book/Book';
import * as consts from '../consts';


describe('Lybrari class', () => {
  
  test('Test array object', () => {
    localStorage.setItem('bookList', consts.initialLibraryArray );
    let myLibrary = new Library(localStorage);
    expect(myLibrary).toBeInstanceOf(Library);
    expect(myLibrary.getBooks()).toBeInstanceOf(Array);
  })
  
  
  test('Test library length = 2', () => {
    let myLibrary = new Library(localStorage);
    myLibrary.add(new Book(consts.dataBook1));
    
    expect(myLibrary.getBooks()).toBeInstanceOf(Array);
    expect(myLibrary.getBooks().length).toBe(2);
    expect(myLibrary.getBooks()[0]).toBeInstanceOf(Book);
  })
  
  test('Test Total read === 1', () => {
    let myLibrary = new Library(localStorage);
    myLibrary.remove(consts.dataBook1.id);
    expect(myLibrary.getTotalRead()).toBe(1);
  })
  
  test('Test Total read === 0', () => {
    localStorage.setItem('bookList', "" );
    let myLibrary = new Library(localStorage);
    myLibrary.add(new Book(consts.dataBook1));
    myLibrary.add(new Book(consts.dataBook2));

    expect(myLibrary.getTotalRead()).toBe(1);
  })
  
});