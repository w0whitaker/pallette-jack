import Color from "colorjs.io";

// Definitions
const colorIn = document.querySelector("#color-in");
const colorAdd = document.querySelector("#color-add");
const colorOut = document.querySelector("#color-out");

// Initialize variables
let color;
let swatches = [];

// Functions
function createSwatch(v) {
	const newSwatch = document.createElement("div");
	newSwatch.className = "small";
	newSwatch.style.backgroundColor = v;
	colorOut.insertAdjacentElement("beforeend", newSwatch);
}

// Event listeners
colorIn.addEventListener("input", function () {
	// Check that the value from the input field is a valid
	// format. If it is, assign it to `color`.
	if (colorIn.checkValidity()) {
		color = new Color(colorIn.value);
	} else {
		color = "transparent";
	}
	colorIn.style.outlineColor = color;
});

colorAdd.addEventListener("click", function () {
	// editor flags `toString` b/c it thinks it is native js
	swatches.push(color.toString( {format: "hex" }));
	createSwatch(color);
});

document.addEventListener("keyup", (event) => {
	const keyName = event.key;
	if ( keyName === "Enter" ) {
		createSwatch(color);
	}
})
