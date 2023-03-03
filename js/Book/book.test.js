import  Book  from './Book';
import * as consts from '../consts';

const aBook = new Book(consts.dataBook1);

test('Test Book instance', () => {
  expect( aBook.getId()).toBe(consts.dataBook1.id);
  expect( aBook.getTitle()).toBe(consts.dataBook1.title);
  expect( aBook.getAuthor()).toBe(consts.dataBook1.author);
  expect( aBook.getPages()).toBe(consts.dataBook1.pages);
  expect( aBook.getIsRead()).toBe(consts.dataBook1.isRead);
});

test('Test change properties', () => {
  aBook.setId(consts.dataBook2.id);
  aBook.setTitle(consts.dataBook2.title);
  aBook.setAuthor(consts.dataBook2.author);
  aBook.setPages(consts.dataBook2.pages);
  aBook.setIsRead(consts.dataBook2.isRead);

  expect( aBook.getId()).toBe( consts.dataBook2.id);
  expect( aBook.getTitle()).toBe(consts.dataBook2.title);
  expect( aBook.getAuthor()).toBe(consts.dataBook2.author);
  expect( aBook.getPages()).toBe(consts.dataBook2.pages);
  expect( aBook.getIsRead()).toBe(consts.dataBook2.isRead);
  expect( aBook.toogleRead()).toBe(!consts.dataBook2.isRead);
  expect( aBook.toString()). toBe( 
  `id:${consts.dataBook2.id} title:${consts.dataBook2.title} pages:${consts.dataBook2.pages} author:${consts.dataBook2.author} isRead: ${false}`
  )
});
