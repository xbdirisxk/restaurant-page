function contact() {
	const div = document.createElement("div");
	div.classList.add("contact");

	const call = document.createElement("h3");
	call.textContent = "call: +252637893256";

	const email = document.createElement("h3");
	email.textContent = "Email: blatnice201@gmail.com";

	const h5 = document.createElement("h4");
	h5.textContent = "or visit us, check our location";

	const restaurentMap = document.createElement("img");
	restaurentMap.src = "location.jpg";

	// add image

	div.append(call);
	div.append(email);
	div.append(h5);
	div.append(restaurentMap);

	div.classList.add("hide");

	return div;
}

export default contact;
