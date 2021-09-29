const openModal= document.querySelector('.openModal');
const closeModal = document.querySelector('.closeModal');
const greyScr = document.querySelector('.overlay');

openModal.addEventListener('click', function(){
	greyScr.style.visibility = 'visible';
});
closeModal.addEventListener('click', function(){
	greyScr.style.visibility = 'hidden';
});