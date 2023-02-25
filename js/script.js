import Library from './Library.js';

const library = new Library();

const no_books_msg = document.getElementById("no_books_msg");


const updateBook = (index) => {
  if (document.getElementById("myForm").style.display == "flex") {
    return;
  }

  let idx = library.getBooks().findIndex( book => book.getId() == index);

  library.getBooks()[idx].toogleRead();
  library.persist();

  document.getElementById(`edit#${index}`).innerText =
  library.getBooks()[idx].isRead ? `Read: Yes 😸` : `Read: No 😿`;
  count_Books();
}

const removeFromList = (index) => {
  if (document.getElementById("myForm").style.display == "flex") {
    return;
  }

  library.books = library.books.filter( book => book.id !== index );
  library.persist();

  document.getElementById(`delete#${index}`).remove();
  set_no_books_msg();
  count_Books();
}

const mountCard = (data, index ) => {
  const main = document.getElementById("main");
  let divCard = document.createElement("div");
  let idx = index ? index: data.getId();

  divCard.id = `delete#${idx}`; 

  divCard.classList.add("card");
  let fieldName = document.createElement("strong");
  fieldName.innerText = "Title: ";

  let spanData = document.createElement("span");
  spanData.appendChild(fieldName);
  spanData.append(data.getTitle());
  divCard.appendChild(spanData);
  divCard.appendChild(document.createElement("hr"));

  fieldName = document.createElement("strong");
  fieldName.innerText = "Author: ";
  spanData = document.createElement("span");
  spanData.appendChild(fieldName);
  spanData.append(data.getAuthor());
  divCard.appendChild(spanData);
  divCard.appendChild(document.createElement("hr"));

  fieldName = document.createElement("strong");
  fieldName.innerText = "Pages: ";
  spanData = document.createElement("span");
  spanData.appendChild(fieldName);
  spanData.append(data.getPages());
  divCard.appendChild(spanData);
  divCard.appendChild(document.createElement("hr"));

  fieldName = document.createElement("strong");
  fieldName.innerText = "Read: ";
  spanData = document.createElement("span");
  spanData.id=`edit#${idx}`; 
  spanData.appendChild(fieldName);
  spanData.append(data.getIsRead() == 'true'  ? `Yes 😸` : `No 😿`);
  divCard.appendChild(spanData);
  divCard.appendChild(document.createElement("hr"));

  let divButons = document.createElement("div");

  let button = document.createElement("button");
  let icon = document.createElement("i");
  icon.className = "fa-regular fa-pen-to-square";
  button.appendChild(icon);
  button.append("Edit");
  button.addEventListener('click', () => updateBook(idx));

  divButons.appendChild(button);

  button = document.createElement("button");
  icon = document.createElement("i");
  icon.className = "fas fa-trash-alt";
  button.appendChild(icon);
  button.append("Delete");
  button.addEventListener('click', () => removeFromList(idx));

  divButons.appendChild(button);

  divCard.appendChild(divButons);

  main.appendChild(divCard);
}

const set_no_books_msg = () => {
  no_books_msg.style.display = (library.getBooks().length == 0) ? "inline" : "none";
}

const count_Books = () => {
  document
  .getElementById('books_total')
  .innerText = `Books Total: ${library.getBooks().length}`

  document
  .getElementById('books_read')
  .innerText = `Books Read: ${library.getTotalRead()}`
}

const showList = () => {
  library.getBooks()?.forEach((e) => mountCard(e));

  set_no_books_msg();  
  count_Books();

}

showList();

export {
  library, 
  mountCard,
  set_no_books_msg,
  count_Books
}