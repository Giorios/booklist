var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn) {
btn.addEventListener('click', function(e){

const li = e.target.parentElement;
li.parentNode.removeChild(li)

});
});

const link = document.querySelector('#page-banner a');

    link.addEventListener('click', function(e){
        e.preventDefault();
        console.log('navigation to ', e.target.textContent, ' was prevented');
    });

    const list = document.querySelector('#book-list ul');
//delete books
list.addEventListener('click', function(e){
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

//add books
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

    deleteBtn.textContent = 'delete';
    bookName.textContent = value;
    
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

//hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(function(book){
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) != -1){
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  })
})