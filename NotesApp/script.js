const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

// tampilkan notes dari local storage
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();

// update to local storage
function updateStorage() {
  localStorage.setItem('notes', notesContainer.innerHTML);
}

createBtn.addEventListener('click', function () {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true');
  img.src = 'images/delete.png';
  notesContainer.appendChild(inputBox).appendChild(img);
})

// remove notes
notesContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === 'P') {
    notes = document.querySelectorAll('.input-box');
    notes.forEach(note => {
      note.onkeyup = function () {
        updateStorage();
      }
    })
  }
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    document.execCommand('insertLineBreak');
    e.preventDefault();
  }
})