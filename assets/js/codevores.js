// MENU BURGER

 document.querySelector('.cross').addEventListener('click', function() {
   document.querySelector('.aside').style.display='none';
   document.querySelector('.hamburger').style.display='inline';
});

document.querySelector('.hamburger').addEventListener('click', function() {
   document.querySelector('.aside').style.display='inline';
   document.querySelector('.hamburger').style.display='none';
});
document.querySelector('.aside').style.display='none';
