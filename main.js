import Color from "colorjs.io";

const colorIn = document.querySelector("#color-in");
const colorAdd = document.querySelector("#color-add");
const colorOut = document.querySelector("#color-out");

let color;
let swatches = [];

colorIn.addEventListener("input", function () {
	if (colorIn.checkValidity()) {
		color = new Color(colorIn.value);
	} else {
		color = "transparent";
	}
	colorIn.style.outlineColor = color;
});

colorAdd.addEventListener("click", function () {
	swatches.push(color.toString( {format: "hex" }));
	createSwatch(color);
});

function createSwatch(v) {
	const newSwatch = document.createElement("div");
	newSwatch.className = "small";
	newSwatch.style.backgroundColor = v;
	colorOut.insertAdjacentElement("beforeend", newSwatch);
}

document.addEventListener("keyup", (event) => {
	const keyName = event.key;
	if ( keyName === "Enter" ) {
		createSwatch(color);
	} else {
		return;
	}
})
