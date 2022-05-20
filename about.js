console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let cat = document.querySelector('img')

cat.addEventListener('mouseover', (evt) => {
	alert ('welcome')
})