const apiUrl = 'https://api.quotable.io/random';
const quote = document.getElementById('quote');
const author = document.getElementById('author');

async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();

  quote.innerHTML = data.content;
  author.innerHTML = data.author;
  console.log(data);
}

getQuote(apiUrl);

function tweet() {
  window.open(href="https://twitter.com/intent/tweet?text=" + quote.innerHTML, + "- " + author.innerHTML,  "Tweet Window", "width=500, height=500");
}