window.onload = function(event) {
	let copyrightYear = document.getElementById("copyright-year");
	copyrightYear.textContent = (new Date()).getFullYear();
};