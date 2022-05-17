console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Everything is Submitted!");
}
function complimentHandler() {
	alert("Looking Fresh");
}

let picture = document.querySelector("#picture")

picture.addEventListener("mouseover",complimentHandler)

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);