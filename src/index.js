import "./style.css";

function navigationBar() {
	const navbar = document.createElement("div");
	navbar.textContent = "home";

	return navbar;
}

const content = document.querySelector("#content");
content.append(navigationBar());
console.log("what about now");
