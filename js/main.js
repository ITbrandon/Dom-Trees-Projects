class newQuote {
  constructor(person, quote, button) {
    this.person = person;
    this.quote = quote;
    this.button = button;
    this.quotesArray =  [
      {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill"
      },
      {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        person: "Franklin D. Roosevelt"
      },
      {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
      },
      {
        quote: "Believe you can and you're halfway there.",
        person: "Theodore Roosevelt"
      },
      {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        person: "Martin Luther King Jr."
      },
      {
        quote: "I do the very best I know how-the very best I can; and mean to keep doing so until the end.",
        person: "Abraham Lincoln."
      }
    ];
  this.currentIndex = 5;
  this.init();
  }

  generateNewQuote = () => {
    let randomIndex = this.randomNumber();
  
    while(randomIndex === this.currentIndex)
    {
      randomIndex = this.randomNumber();
    }
  
    this.currentIndex = randomIndex;
    this.person.innerText = this.quotesArray[randomIndex].person;
    this.quote.innerText = this.quotesArray[randomIndex].quote;
    
  }

  randomNumber = () => {
    return Math.floor(Math.random() * this.quotesArray.length);
  }

  init = () => {
    this.button.addEventListener('click', this.generateNewQuote);
  }

}

const quotes = new newQuote(document.querySelector('#name'), document.querySelector('#quote'), document.querySelector('#button'))                   