window.onload = function(event) {
	let copyrightYear = document.getElementById("copyright-year");
	copyrightYear.textContent = (new Date()).getFullYear();

	let form = document.getElementsByTagName("form")[0];
	form.addEventListener("submit", function(event) {
		event.preventDefault();
	});
};