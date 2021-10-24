import home from "./home";
import foodMenu from "./menu";
import contact from "./contact";

function navigationBar() {
	const navbar = document.createElement("div");
	navbar.classList.add("navbar");

	let span1 = document.createElement("span");
	span1.textContent = "Home";
	let span2 = document.createElement("span");
	span2.textContent = "Menu";
	let span3 = document.createElement("span");
	span3.textContent = "Contact";

	navbar.append(span1);
	navbar.append(span2);
	navbar.append(span3);

	span1.addEventListener("click", () => {
		homePage.classList.remove("hide");
		menuPage.classList.add("hide");
		contactPage.classList.add("hide");
	});
	span2.addEventListener("click", () => {
		homePage.classList.add("hide");
		menuPage.classList.remove("hide");
		contactPage.classList.add("hide");
	});

	span3.addEventListener("click", () => {
		homePage.classList.add("hide");
		menuPage.classList.add("hide");
		contactPage.classList.remove("hide");
	});

	return navbar;
}

const content = document.querySelector("#content");
content.append(navigationBar());

let homePage = home();
let menuPage = foodMenu();
let contactPage = contact();
content.append(homePage);
content.append(menuPage);
content.append(contactPage);
