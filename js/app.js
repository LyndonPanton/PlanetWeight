window.onload = function(event) {
	let copyrightYear = document.getElementById("copyright-year");
	copyrightYear.textContent = (new Date()).getFullYear();

	let form = document.getElementsByTagName("form")[0];
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		let weight = document.getElementById("weight").value;
		let weightElements = document.getElementsByClassName("planet-weight");

		calculateWeights(weight, weightElements);
	});

	function calculateWeights(weight, weightElements) {
		// mercury, venus, mars, jupiter, saturn, uranus, neptune
		let gravitationForces = [
			3.7,
			8.87,
			3.711,
			24.79,
			10.44,
			8.69,
			11.15
		];

		let newWeights = [];
		let g = 9.81;

		for (let i = 0; i < weightElements.length; i++) {
			let newWeight = ((Number(weight) / g) * gravitationForces[i]).toFixed(2);
			newWeights.push(newWeight);
		}

		return newWeights;
	}
};