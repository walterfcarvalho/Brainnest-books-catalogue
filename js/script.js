import Library from './Library.js';

const library = new Library();

const updateBook = (index) => {
  if (document.getElementById("myForm").style.display == "flex") {
    return;
  }

  let idx = library.books.findIndex( book => book.getId() == index);

  library.books[idx].toogleRead();
  library.persist();

  document.getElementById(`edit#${index}`).innerText =
  library.books[idx].isRead ? `Read: Yes 😸` : `Read: No 😿`;
}

const removeFromList = (index) => {
  if (document.getElementById("myForm").style.display == "flex") {
    return;
  }

  library.books = library.books.filter( book => book.id !== index );
  library.persist();

  document.getElementById(`delete#${index}`).remove();
}

const mountCard = (data, index ) => {
  
  const main = document.getElementById("main");
  let divCard = document.createElement("div");
  let idx = index ? index: data.id;

  divCard.id = `delete#${idx}`; 

  divCard.classList.add("card");
  let fieldName = document.createElement("strong");
  fieldName.innerText = "Title: ";

  let spanData = document.createElement("span");
  spanData.appendChild(fieldName);
  spanData.append(data.title);
  divCard.appendChild(spanData);
  divCard.appendChild(document.createElement("hr"));

  fieldName = document.createElement("strong");
  fieldName.innerText = "Author: ";
  spanData = document.createElement("span");
  spanData.appendChild(fieldName);
  spanData.append(data.author);
  divCard.appendChild(spanData);
  divCard.appendChild(document.createElement("hr"));

  fieldName = document.createElement("strong");
  fieldName.innerText = "Pages: ";
  spanData = document.createElement("span");
  spanData.appendChild(fieldName);
  spanData.append(data.pages);
  divCard.appendChild(spanData);
  divCard.appendChild(document.createElement("hr"));

  fieldName = document.createElement("strong");
  fieldName.innerText = "Read: ";
  spanData = document.createElement("span");
  spanData.id=`edit#${idx}`; 
  spanData.appendChild(fieldName);
  spanData.append(data.isRead ? `Yes 😸` : `No 😿`);
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

const showList = () => {
  library
  .getBooks()?.forEach((e) => mountCard(e));
}

showList();

export {
  library, mountCard
}