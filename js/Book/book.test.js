import  Book  from './Book';

const dataBook1 = {
  id:1,  
  title: "A title",
  pages: 999,
  author: "author name",
  isRead: false
}

const dataBook2 = {
  id:2,  
  title: "A new title",
  pages: 9999,
  author: "new author name",
  isRead: true
}

const aBook = new Book(dataBook1);

test('Test Book instance', () => {
  expect( aBook.getId()).toBe(dataBook1.id);
  expect( aBook.getTitle()).toBe(dataBook1.title);
  expect( aBook.getAuthor()).toBe(dataBook1.author);
  expect( aBook.getPages()).toBe(dataBook1.pages);
  expect( aBook.getIsRead()).toBe(dataBook1.isRead);
});

test('Test change properties', () => {
  aBook.setId(dataBook2.id);
  aBook.setTitle(dataBook2.title);
  aBook.setAuthor(dataBook2.author);
  aBook.setPages(dataBook2.pages);
  aBook.setIsRead(dataBook2.isRead);

  expect( aBook.getId()).toBe( dataBook2.id);
  expect( aBook.getTitle()).toBe(dataBook2.title);
  expect( aBook.getAuthor()).toBe(dataBook2.author);
  expect( aBook.getPages()).toBe(dataBook2.pages);
  expect( aBook.getIsRead()).toBe(dataBook2.isRead);
  expect( aBook.toogleRead()).toBe(!dataBook2.isRead);
  expect( aBook.toString()). toBe( 
  `id:${dataBook2.id} title:${dataBook2.title} pages:${dataBook2.pages} author:${dataBook2.author} isRead: ${false}`
  )
});
