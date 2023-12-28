const quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    // Add more quotes as needed
  ];
function generateQuote(){
    let rand = Math.floor(Math.random()*quotes.length)
    let quote = quotes[rand]
    document.querySelector('#quoteDisplay').innerText = quote
}  