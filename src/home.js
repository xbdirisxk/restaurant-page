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

export default home;
