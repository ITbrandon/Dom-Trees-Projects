class faq {
  constructor(accordion) {
    this.accordion = accordion;
    this.init();
  }

  init = () => {
    const contentContainers = this.accordion.querySelectorAll('.content-container');
    
    contentContainers.forEach(element => {
      element.addEventListener('click', (event) => {
        event.target.classList.toggle('active');

        const isQuestionClick = event.target.classList.contains('question')   
      
        if (isQuestionClick) {
          element.classList.toggle('active');
        }

        const isAnswerClick = event.target.classList.contains('answer')

        if(isAnswerClick) {
          element.classList.toggle('active');
        }
      }) 
     
    });

  };
}


const action = new faq(document.querySelector('#faq'));

