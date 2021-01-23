// Variables
const btns = document.querySelectorAll('.btn');
const counter = document.querySelector('#count');
const main = document.querySelector('main');

// set initial count
let count = 0;

btns.forEach(btn => {
   // select the button targetted.
   btn.addEventListener('click', (e) => {
      (e.currentTarget.title === 'increase') ? count++ 
      : (e.currentTarget.title === 'decrease') ? count--
      : count = 0;
      // update the counter in html
      counter.textContent = count;
      // update the background in html
      if (count > 0) {
         main.classList.add('green');
         main.classList.remove('red');
      } else if (count < 0) {
         main.classList.add('red');
         main.classList.remove('green');
      } else {
         main.classList.remove('green');
         main.classList.remove('red');
      }
   })
})