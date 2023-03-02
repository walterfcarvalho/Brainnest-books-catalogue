import Library from './Library';
// import 'jest-json';

localStorage.setItem('bookList', `[{"id":"1677760206361","title":"title1","pages":"999","author":"author1","isRead":"true"}]`);

let myLibrary = new Library(localStorage);

describe('AnalizeArray test suite', () => {

  test('Test array object', () => {
    expect(myLibrary.getBooks().length).toBe(1);
  })


});