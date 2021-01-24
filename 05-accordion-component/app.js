const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(faqItem => {
   // select the current faq item
   faqItem.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('active');
      // close other item that is not active
      faqItems.forEach(item => {
         if (item !== e.currentTarget) {
            item.classList.remove('active');
         }
      })   
   })
});