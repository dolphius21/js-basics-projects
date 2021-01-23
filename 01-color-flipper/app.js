// variables
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector('.btn');
const colorSpan = document.querySelector('.color');

// return => random number
const getRandomNum = () => Math.floor(Math.random() * hex.length);

btn.addEventListener('click', () => {
   // generate random hex
   let randomHex = '#';
   for (let i = 0; i < 6; i++) {
      randomHex += hex[getRandomNum()];
   }
   // style colorSpan and body
   colorSpan.textContent = randomHex;
   document.body.style.backgroundColor = randomHex;
});

