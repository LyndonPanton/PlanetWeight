window.onload = function(event) {
	let copyrightYear = document.getElementById("copyright-year");
	copyrightYear.textContent = (new Date()).getFullYear();

	let form = document.getElementsByTagName("form")[0];
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		let input = document.getElementById("weight").value;
		let weightElements = document.getElementsByClassName("planet-weight");

		calculateWeights(weightElements);
	});

	function calculateWeights(weightElements) {

	}
};