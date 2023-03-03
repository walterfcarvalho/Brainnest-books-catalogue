import * as script from './script.js';
import Book from './Book/Book.js'

const myForm = document.getElementById("myForm");
const filTitle = document.getElementById("title");
const spanTitle = document.getElementById("title-error");
const filAuthor = document.getElementById("author");
const spanAuthor = document.getElementById("author-error");
const filPages = document.getElementById("pages");
const spanPages = document.getElementById("pages-error");
const btAdd = document.getElementById("form_show");
const btnCancel = document.getElementById("form_cancel");
const filIsRead = document.getElementById("read");

const change_input_display = (input, span, errorMsg) => {
  if (errorMsg) {
    span.innerText = errorMsg;
    input.classList.add('input_invalid');
    input.classList.remove('input_valid');
    span.style.visibility = "visible";
  } else {
    span.style.visibility = "hidden";
    input.classList.add('input_valid');
    input.classList.remove('input_invalid');  
  }
}

const check_input = (input, span, regex, errorMsg) => {
  //if (!regex.test(input.value)) {
  if (!regex) {
    change_input_display(input, span, errorMsg);
    return false;
  }
  change_input_display(input, span, "");
  return true;
}


const cancelInsert = (event) => {
  event.preventDefault();
  
  myForm.classList.remove("roll");
  myForm.classList.add("unroll");
  
  setTimeout( () => {
    myForm.style.display = "none";
  }, 200 );

  filTitle.value = "";
  filAuthor.value = "";
  filPages.value = "0";
  filIsRead.value = true;

  filTitle.classList.remove("input_valid", "input_invalid")
  filAuthor.classList.remove("input_valid", "input_invalid")
  filPages.classList.remove("input_valid", "input_invalid")
  spanAuthor.innerText = "";
  spanTitle.innerText = "";
  spanPages.innerText = "";
  filIsRead.classList.remove("input_valid", "input_invalid") 

}

btAdd.addEventListener ('click', (event) => {
  event.preventDefault();
  myForm.classList.remove("unroll");
  myForm.classList.add("roll");
  myForm.style.display = "flex";
  document.getElementById("title").focus();
})

const check_title = () => {
  return check_input (
    filTitle,
    spanTitle,
    filTitle.value.length >=2,
    'Inform a title with at least 2 chars '
  );
}

const check_author = () => {
  return check_input (
    filAuthor,
    spanAuthor,
    filAuthor.value.length >=2,
    'Inform a author with at least 2 chars '
  );
}

const check_pages = () => {
  return check_input (
    filPages,
    spanPages,
    filPages.value > 0,
    // /^^[1-9][0-9]*$/,
    'You know, amount of pages uses to be bigger than 0.'
  );
}

filPages.addEventListener('blur', check_pages );
filTitle.addEventListener('blur', check_title );
btnCancel.addEventListener ('click', cancelInsert );
filAuthor.addEventListener('blur', check_author );

myForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let ok = true;

  if ( !check_author() ) ok = false;
  if ( !check_title() )  ok = false;
  if ( !check_pages() ) ok = false;
  if ( !ok ) return;

  let id = new Date().getTime();
  let formData = Object.fromEntries(new FormData(myForm));
  let newBook =  new Book({
    ...formData, 
    id
  });

  script.library.add( newBook );
  
  script.mountCard( newBook, id );
  cancelInsert(event);
  script.set_no_books_msg();
  script.count_Books();
})
