function handleColor() {
	alert("Green!");
}
function handleFavoritePlace() {
	alert("The Mountains");
}
function handleFavoriteRitual() {
	alert("Blood Sacrifice");
}

let favColor = document.querySelector("#color")
let favPlace = document.querySelector("#place")
let favRitual = document.querySelector("#ritual")

favColor.addEventListener("click",handleColor);
favPlace.addEventListener('click', handleFavoritePlace);
favRitual.addEventListener("click",handleFavoriteRitual)