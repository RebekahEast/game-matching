const cards = document.querySelectorAll('.tile');

function tileFlip (){
    this.classList.toggle('flip');
  }
  
  cards.forEach(card => card.addEventListener('click', flipCard)); 

