const toggle = document.querySelector('.toggle');
const toggleIcon = document.querySelector('.toggle i')
const sidebarContainer = document.querySelector('.container');

toggle.addEventListener('click', () => {
   sidebarContainer.classList.toggle('show')
   toggle.classList.toggle('active-toggle')
   toggleIcon.classList.toggle('fa-times')
});