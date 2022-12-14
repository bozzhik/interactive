const images = document.getElementsByClassName('program');
const fix = document.getElementById('program-fix');
const next = document.getElementById('next-machine');
const load = document.getElementById('cpu-load');

fix.style.visibility = 'hidden';
load.style.visibility = 'visible';

let clicked = false;
document.addEventListener('click', function (event) {
   if (event.target.classList.contains('program')) {
      event.target.style.display = 'none';
      showImages();
      let clicked = true;
   }
});

function showImages() {
   for (let i = 0; i < images.length; i++) {
      setTimeout(() => {
         const x = Math.random();
         const y = Math.random();
         images[i].style.top = `${x * 100}%`;
         images[i].style.left = `${y * 100}%`;
         images[i].style.opacity = 1;
      }, i * 100);
   }

   if (clicked) {
      return;
   }
}

const timeoutId = setTimeout(() => {
   showImages();
   setTimeout(() => {
      load.style.visibility = 'visible';
      load.src = 'img/trotling-load.gif';
   }, 0);
   setTimeout(() => {
      load.src = 'img/trotling-load.png';
   }, 5500);
}, 500);

function endTrotling() {
   setTimeout(() => {
      for (let i = 0; i < images.length; i++) {
         images[i].style.opacity = 0.2;
      }
      fix.style.visibility = 'visible';
      fix.src = 'img/trotling-fix.gif';
   }, 500);

   setTimeout(() => {
      load.src = 'img/trotling-unload.png';
   }, 1000);

   setTimeout(() => {
      for (let i = 0; i < images.length; i++) {
         images[i].style.opacity = 0;
      }
   }, 3000);

   setTimeout(() => {
      load.style.visibility = 'hidden';
   }, 3600);

   setTimeout(() => {
      fix.style.visibility = 'hidden';
   }, 3900);

   setInterval(() => {
      next.classList.add('scaled');
   }, 4100);
}

const button = document.getElementById('fix-this');
button.addEventListener('click', endTrotling);
