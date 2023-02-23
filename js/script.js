import Library  from './Library.js';

const library  = new Library();

const getCard = (data) => {

  let divCard = document.createElement("div");
  
  divCard.classList.add("card");
  let fieldName = document.createElement("strong");
  fieldName.innerText = "Title: ";

  let spanData = document.createElement("span"); 
  spanData.appendChild(fieldName);
  spanData.append(data.title);
  divCard.appendChild(spanData);
  divCard.appendChild( document.createElement("hr") );
  
  fieldName = document.createElement("strong");
  fieldName.innerText = "Author: ";
  spanData = document.createElement("span"); 
  spanData.appendChild(fieldName);
  spanData.append(data.author);
  divCard.appendChild(spanData);
  divCard.appendChild( document.createElement("hr") );

  fieldName = document.createElement("strong");
  fieldName.innerText = "Pages: ";
  spanData = document.createElement("span"); 
  spanData.appendChild(fieldName);
  spanData.append(data.pages);
  divCard.appendChild(spanData);
  divCard.appendChild( document.createElement("hr") );

  fieldName = document.createElement("strong");
  fieldName.innerText = "Read: ";
  spanData = document.createElement("span"); 
  spanData.appendChild(fieldName);
  spanData.append(data.isRead ? `Yes 😸`: `No 😖`);
  divCard.appendChild(spanData);
  divCard.appendChild( document.createElement("hr") );
  
  let divButons = document.createElement("div");

  let button = document.createElement("button");
  let icon = document.createElement("i");
  icon.className = "fa-regular fa-pen-to-square";
  button.appendChild(icon);  
  button.append("Edit");
  divButons.appendChild( button );

  button = document.createElement("button");
  icon = document.createElement("i");
  icon.className = "fas fa-trash-alt";
  button.appendChild(icon);  
  button.append("Delete");
  divButons.appendChild( button  );

  divCard.appendChild( divButons );
  





  return divCard;

}

const showList = () => {
  const main = document.getElementById("main");

    library.getBooks()?.forEach( e => {
      console.log(e);

      main.appendChild( getCard(e)  );

    });



}

showList();
