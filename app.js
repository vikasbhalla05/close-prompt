// selecting the elements to click
const openModal= document.querySelector('.openModal');
const closeModal = document.querySelector('.closeModal');
const greyScr = document.querySelector('.overlay');

// opening the modal or message
openModal.addEventListener( 'click',function(){
	greyScr.style.visibility = 'visible';
});
// closing the modal or message
closeModal.addEventListener('click', function(){
	greyScr.style.visibility = 'hidden';
});