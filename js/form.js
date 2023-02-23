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
  if (!regex.test(input.value)) {
    change_input_display(input, span, errorMsg);
    return false;
  }
  change_input_display(input, span, "");
  return true;
}

const check_title = (input, span, regex, errorMsg) => {
  if (!regex.test(input.value)) {
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

btnCancel.addEventListener ('click', cancelInsert );

btAdd.addEventListener ('click', (event) => {
  event.preventDefault();
  myForm.classList.remove("unroll");
  myForm.classList.add("roll");
  myForm.style.display = "flex";
})


filTitle.addEventListener('blur', () => {
  return check_input (
    filTitle,
    spanTitle,
    /^(?=.{3,50}$)^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*$/,
    'Inform a title with at least 2 non numeric chars '
  );
});

filAuthor.addEventListener('blur', () => {
  return check_input (
    filAuthor,
    spanAuthor,
    /^(?=.{3,50}$)^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*$/,
    'Inform a author with at least 2 non numeric chars '

  );
});

filPages.addEventListener('blur', () => {
  return check_input (
    filPages,
    spanPages,
    /^^[1-9][0-9]*$/,
    'Inform amout of pages.'
  );
});

myForm.addEventListener('submit', (event) => {
  event.preventDefault();

})
