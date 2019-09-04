window.onload = function(event) {
	let copyrightYear = document.getElementById("copyright-year");
	copyrightYear.textContent = (new Date()).getFullYear();

	let button = document.getElementById("submit");
	button.addEventListener("click", shine.bind(this, button));

	let form = document.getElementsByTagName("form")[0];
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		let weight = document.getElementById("weight").value;
		let weightElements = document.getElementsByClassName("planet-weight");

		let weights = calculateWeights(weight);
		displayWeights(weights, weightElements);
	});

	function calculateWeights(weight) {
		// mercury, venus, mars, jupiter, saturn, uranus, neptune
		let gravitationalForces = [
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

		for (let i = 0; i < gravitationalForces.length; i++) {
			let newWeight = ((Number(weight) / g) * gravitationalForces[i]).toFixed(2);
			newWeights.push(newWeight);
		}

		return newWeights;
	}

	function displayWeights(weights, weightElements) {
		for (let i = 0; i < weightElements.length; i++) {
			weightElements[i].textContent = weights[i];
		}
	}

	function shine(element) {
		element.classList.add("shine");
		setTimeout(function(event) {
			element.classList.remove("shine");
		}, 400);
	}
};