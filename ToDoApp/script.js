const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  // cek apakah inputan ada atau tidak
  // jika tidak ada, tampilkan pesan
  if (inputBox.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value; // ganti isi LI dengan inputan
    listContainer.appendChild(li); // masukkan LI ke dalam container

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span); // add close button to the li
  }

  // kosongkan/reset inputan
  inputBox.value = "";

  // simpan ke dalam local storage
  saveData();
}

// ketika sebuah list dipilih
listContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") { // jika tag li dipilih
    event.target.classList.toggle("checked");  // tambahkan class checked ke li

    // simpan ke dalam local storage
    saveData();
  } else if (event.target.tagName === "SPAN") { // jika tag span dipilih
    event.target.parentElement.remove(); // hapus li dari container 

    // simpan ke dalam local storage
    saveData();
  }
}, false);

function saveData() {
  // set data in local storage 
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data"); // ambil data dari local storage 
}

showTask(); // jalankan fungsi showTask untuk menampilkan data dari local storage 