const questions = [
  {
    question: "Which is the best programming language?",
    answers: [
      {
        text: "Javascript",
        correct: true
      },
      {
        text: "Python",
        correct: false
      },
      {
        text: "Java",
        correct: false
      },
      {
        text: "C++",
        correct: false
      }
    ]
  },
  {
    question: "Which is the largest animal in the world?",
    answers: [
      {
        text: "Elephant",
        correct: false
      },
      {
        text: "Giraffe",
        correct: false
      },
      {
        text: "Blue Whale",
        correct: true
      },
      {
        text: "Tiger",
        correct: false
      }
    ]
  },
  {
    question: "What is the capital of USA?",
    answers: [
      {
        text: "New York",
        correct: false
      },
      {
        text: "Los Angeles",
        correct: false
      },
      {
        text: "Washington",
        correct: true
      },
      {
        text: "Houston",
        correct: false
      }
    ]
  },
  {
    question: "What is the capital of France?",
    answers: [
      {
        text: "Paris",
        correct: true
      },
      {
        text: "London",
        correct: false
      },
      {
        text: "Berlin",
        correct: false
      },
      {
        text: "Rome",
        correct: false
      }
    ]
  }
];

const question = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState(); // mengembalikan state awal
  let currentQuestion = questions[currentQuestionIndex]; // kuis diisi berdasarkan indeks di object questions
  console.log(currentQuestion);
  let questionNum = currentQuestionIndex + 1; // jadi kuis 1 didapat dari indeks 0 + 1
  question.innerHTML = questionNum + ". " + currentQuestion.question; // kuis diisi dengan nomor kuis dan pertanyaan

  // untuk jawaban 
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text; // jawaban diisi dengan teks 
    button.classList.add("btn");
    answerButton.appendChild(button); // menampilkan jawaban pada button

    if (answer.correct) {
      button.dataset.correct = answer.correct; // mengisi data-correct dengan jawaban yang benar
    }
    button.addEventListener("click", selectAnswer);
  })
}

function resetState() {
  nextButton.style.display = "none"; // menampilkan tombol selanjutnya
  while (answerButton.firstChild) { // mengeluarkan semua button yang ada di answerButton 
    answerButton.removeChild(answerButton.firstChild); // mengeluarkan button pertama di answerButton
  }
}

function selectAnswer(e) {
  const selectedButton = e.target; // menyimpan button yang dipilih
  const isCorrect = selectedButton.dataset.correct === "true"; // mengecek jawaban yang dipilih dengan jawaban yang benar 

  // jika jawaban benar tampilkan class correct, jika salah tampilkan class incorrect
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }

  Array.from(answerButton.children).forEach(button => {
    // mengambil semua button yang ada di answerButton 
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true; // menonaktifkan button
  })
  nextButton.style.display = "block"; // tampilkan tombol next
}

function showScore() {
  resetState(); // mengembalikan state awal
  question.innerHTML = "You scored " + score + " out of " + questions.length;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++; // mengubah indeks kuis
  if (currentQuestionIndex < questions.length) { // jika indeks kuis kurang dari jumlah kuis 
    showQuestion(); // tampilkan kuis
  } else {
    showScore(); // tampilkan score
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) { // jika indeks kuis kurang dari jumlah kuis
    handleNextButton()
  } else {
    startQuiz();
  }
})

startQuiz();