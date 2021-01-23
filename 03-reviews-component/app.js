// variables
const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const comment = document.querySelector('#comment');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentItem = 0;

// function => updates the content in html
const updateReview = () => {
   const item = reviews[currentItem];
   img.src = item.img;
   author.textContent = item.name;
   job.textContent = item.job;
   comment.textContent = `"${item.text}"`;
}

// loads initial person
window.addEventListener('DOMContentLoaded', () => {
   updateReview();
})

// loads previews person
prevBtn.addEventListener('click', () => {
   if (currentItem === 0) {
      currentItem = reviews.length - 1;
   } else {
      currentItem--
   }
   updateReview();
})

// loads next person
nextBtn.addEventListener('click', () => {
   if (currentItem === reviews.length - 1) {
      currentItem = 0;
   } else {
      currentItem++
   }
   updateReview();
})
