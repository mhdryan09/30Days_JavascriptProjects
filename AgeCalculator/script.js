let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge() {
  let birthDate = new Date(userInput.value);

  let dayOfBirthDate = birthDate.getDate();
  let monthOfBirthDate = birthDate.getMonth() + 1;
  let yearOfBirthDate = birthDate.getFullYear();

  let today = new Date();

  let dayOfToday = today.getDate();
  let monthOfToday = today.getMonth() + 1;
  let yearOfToday = today.getFullYear();

  // different between birthdate and today
  let d3, m3, y3;

  y3 = yearOfToday - yearOfBirthDate;

  if (monthOfToday >= monthOfBirthDate) {
    m3 = monthOfToday - monthOfBirthDate;
  } else {
    y3--;
    m3 = 12 + monthOfToday - monthOfBirthDate;
  }

  if (dayOfToday >= dayOfBirthDate) {
    d3 = dayOfToday - dayOfBirthDate;
  } else {
    m3--;
    d3 = getDaysInMonth(yearOfBirthDate, monthOfBirthDate) + dayOfToday - dayOfBirthDate;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--; 
  }

  // console.log(y3, m3, d3);
  result.innerHTML = `Your Age is <span>${y3} years</span>, <span>${m3}</span> months, and <span>${d3}</span> days.`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
} 