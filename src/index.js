import "./style.css";
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

let aboutUs =
	"Welcome,Restaurant Blatnice is one of the oldest Czech restaurant in Prague center, \
	 which offers traditional Czech specialties which you can enjoyed in the pleasant air \
	 conditioned ambience. The traditional Czech restaurant, of course, also include classic Czech wine,\
 	 so we can offer a wide selection of Moravian bottled wines and complete selection of barrel wines .\
	 This wines are imported by us directly from Moravian vineyards and from Blatel,\
	 as based in St. Blatnice. Anthony, who continues the long tradition of wine growing.\
	 With traditional Czech food must drink the typical Czech beer and so we offer the most \
	 famous Czech beer brand Pilsner Urquell and not just light 'Twelve', \
	 but also unpasteurized light Gambrinus 'Ten', but also a black Kozel and halfdark Master. \
	 Since 2002, Pilsner Urquell is ranked us among the VIP‘S restaurants, \
	 which until 2005 are only nine in Prague. ";
function home() {
	const main = document.createElement("main");
	main.classList.add("main");

	let h1 = document.createElement("h1");
	h1.textContent = "Blarnice Restaurent";

	let p = document.createElement("p");
	p.textContent = aboutUs;

	let btn = document.createElement("button");
	btn.textContent = "ORDER FOOD NOW";

	main.append(h1);
	main.append(p);
	main.append(btn);

	return main;
}

const content = document.querySelector("#content");
content.append(navigationBar());

let homePage = home();
let menuPage = foodMenu();
let contactPage = contact();
content.append(homePage);
content.append(menuPage);
content.append(contactPage);
