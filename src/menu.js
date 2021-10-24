function foodMenu() {
	const menu = document.createElement("div");
	menu.classList.add("menu");

	// food one
	const div1 = document.createElement("div");
	div1.classList.add("food");
	const food1 = document.createElement("img");
	food1.src = "menu-images/food1.jpg";
	food1.classList.add("food-img");
	const br = document.createElement("br");
	const foodName1 = document.createElement("span");
	foodName1.textContent = "Hamburger with Chips";

	div1.append(food1);
	div1.append(br);
	div1.append(foodName1);

	// food two
	const div2 = document.createElement("div");
	div2.classList.add("food");
	const food2 = document.createElement("img");
	food2.src = "menu-images/food2.jpg";
	food2.classList.add("food-img");
	const br2 = document.createElement("br");
	const foodName2 = document.createElement("span");
	foodName2.textContent = "pasta";
	div2.append(food2);
	div2.append(br2);
	div2.append(foodName2);

	// food three
	const div3 = document.createElement("div");
	div3.classList.add("food");
	const food3 = document.createElement("img");
	food3.src = "menu-images/food3.jpg";
	food3.classList.add("food-img");
	const br3 = document.createElement("br");
	const foodName3 = document.createElement("span");
	foodName3.textContent = "French Macarons";
	div3.append(food3);
	div3.append(br3);
	div3.append(foodName3);

	// food four
	const div4 = document.createElement("div");
	div4.classList.add("food");
	const food4 = document.createElement("img");
	food4.src = "menu-images/food4.jpg";
	food4.classList.add("food-img");
	const br4 = document.createElement("br");
	const foodName4 = document.createElement("span");
	foodName4.textContent = "Grilled Barbecue";

	div4.append(food4);
	div4.append(br4);
	div4.append(foodName4);

	// food five
	const div5 = document.createElement("div");
	div5.classList.add("food");
	const food5 = document.createElement("img");
	food5.src = "menu-images/food5.jpg";
	food5.classList.add("food-img");
	const br5 = document.createElement("br");
	const foodName5 = document.createElement("span");
	foodName5.textContent = "Vegetable Sandwich";

	div5.append(food5);
	div5.append(br5);
	div5.append(foodName5);

	// food six
	const div6 = document.createElement("div");
	div6.classList.add("food");
	const food6 = document.createElement("img");
	food6.src = "menu-images/food6.jpg";
	food6.classList.add("food-img");
	const br6 = document.createElement("br");
	const foodName6 = document.createElement("span");
	foodName6.textContent = "Vegetable Salad";

	div6.append(food6);
	div6.append(br6);
	div6.append(foodName6);

	// food seven
	const div7 = document.createElement("div");
	div7.classList.add("food");
	const food7 = document.createElement("img");
	food7.src = "menu-images/food7.jpg";
	food7.classList.add("food-img");
	const br7 = document.createElement("br");
	const foodName7 = document.createElement("span");
	foodName7.textContent = "Bowl of Vegetable Salad";

	div7.append(food7);
	div7.append(br7);
	div7.append(foodName7);

	// food eight
	const div8 = document.createElement("div");
	div8.classList.add("food");
	const food8 = document.createElement("img");
	food8.src = "menu-images/food8.jpg";
	food8.classList.add("food-img");
	const br8 = document.createElement("br");
	const foodName8 = document.createElement("span");
	foodName8.textContent = "Chips";

	div8.append(food8);
	div8.append(br8);
	div8.append(foodName8);

	// append food divs to div menu
	menu.append(div1);
	menu.append(div2);
	menu.append(div3);
	menu.append(div4);
	menu.append(div5);
	menu.append(div6);
	menu.append(div7);
	menu.append(div8);

	menu.classList.add("hide");

	return menu;
}

export default foodMenu;
