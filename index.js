const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Do not watch the clock. Do what it does. Keep going. – Sam Levenson",
    "Success is not in what you have, but who you are. – Bo Bennett",
    "Believe you can and you're halfway there. – Theodore Roosevelt"
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[randomIndex];
  }
  