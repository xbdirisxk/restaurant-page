/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contact() {\n\tconst div = document.createElement(\"div\");\n\tdiv.classList.add(\"contact\");\n\n\tconst call = document.createElement(\"h3\");\n\tcall.textContent = \"call: +252637893256\";\n\n\tconst email = document.createElement(\"h3\");\n\temail.textContent = \"Email: blatnice201@gmail.com\";\n\n\tconst h5 = document.createElement(\"h4\");\n\th5.textContent = \"or visit us, check our location\";\n\n\tconst restaurentMap = document.createElement(\"img\");\n\trestaurentMap.src = \"location.jpg\";\n\n\t// add image\n\n\tdiv.append(call);\n\tdiv.append(email);\n\tdiv.append(h5);\n\tdiv.append(restaurentMap);\n\n\tdiv.classList.add(\"hide\");\n\n\treturn div;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet aboutUs =\n\t\"Welcome,Restaurant Blatnice is one of the oldest Czech restaurant in Prague center, \\\n\t which offers traditional Czech specialties which you can enjoyed in the pleasant air \\\n\t conditioned ambience. The traditional Czech restaurant, of course, also include classic Czech wine,\\\n \t so we can offer a wide selection of Moravian bottled wines and complete selection of barrel wines .\\\n\t This wines are imported by us directly from Moravian vineyards and from Blatel,\\\n\t as based in St. Blatnice. Anthony, who continues the long tradition of wine growing.\\\n\t With traditional Czech food must drink the typical Czech beer and so we offer the most \\\n\t famous Czech beer brand Pilsner Urquell and not just light 'Twelve', \\\n\t but also unpasteurized light Gambrinus 'Ten', but also a black Kozel and halfdark Master. \\\n\t Since 2002, Pilsner Urquell is ranked us among the VIP‘S restaurants, \\\n\t which until 2005 are only nine in Prague. \";\nfunction home() {\n\tconst main = document.createElement(\"main\");\n\tmain.classList.add(\"main\");\n\n\tlet h1 = document.createElement(\"h1\");\n\th1.textContent = \"Blarnice Restaurent\";\n\n\tlet p = document.createElement(\"p\");\n\tp.textContent = aboutUs;\n\n\tlet btn = document.createElement(\"button\");\n\tbtn.textContent = \"ORDER FOOD NOW\";\n\n\tmain.append(h1);\n\tmain.append(p);\n\tmain.append(btn);\n\n\treturn main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction navigationBar() {\n\tconst navbar = document.createElement(\"div\");\n\tnavbar.classList.add(\"navbar\");\n\n\tlet span1 = document.createElement(\"span\");\n\tspan1.textContent = \"Home\";\n\tlet span2 = document.createElement(\"span\");\n\tspan2.textContent = \"Menu\";\n\tlet span3 = document.createElement(\"span\");\n\tspan3.textContent = \"Contact\";\n\n\tnavbar.append(span1);\n\tnavbar.append(span2);\n\tnavbar.append(span3);\n\n\tspan1.addEventListener(\"click\", () => {\n\t\thomePage.classList.remove(\"hide\");\n\t\tmenuPage.classList.add(\"hide\");\n\t\tcontactPage.classList.add(\"hide\");\n\t});\n\tspan2.addEventListener(\"click\", () => {\n\t\thomePage.classList.add(\"hide\");\n\t\tmenuPage.classList.remove(\"hide\");\n\t\tcontactPage.classList.add(\"hide\");\n\t});\n\n\tspan3.addEventListener(\"click\", () => {\n\t\thomePage.classList.add(\"hide\");\n\t\tmenuPage.classList.add(\"hide\");\n\t\tcontactPage.classList.remove(\"hide\");\n\t});\n\n\treturn navbar;\n}\n\nconst content = document.querySelector(\"#content\");\ncontent.append(navigationBar());\n\nlet homePage = (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nlet menuPage = (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nlet contactPage = (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\ncontent.append(homePage);\ncontent.append(menuPage);\ncontent.append(contactPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction foodMenu() {\n\tconst menu = document.createElement(\"div\");\n\tmenu.classList.add(\"menu\");\n\n\t// food one\n\tconst div1 = document.createElement(\"div\");\n\tdiv1.classList.add(\"food\");\n\tconst food1 = document.createElement(\"img\");\n\tfood1.src = \"menu-images/food1.jpg\";\n\tfood1.classList.add(\"food-img\");\n\tconst br = document.createElement(\"br\");\n\tconst foodName1 = document.createElement(\"span\");\n\tfoodName1.textContent = \"Hamburger with Chips\";\n\n\tdiv1.append(food1);\n\tdiv1.append(br);\n\tdiv1.append(foodName1);\n\n\t// food two\n\tconst div2 = document.createElement(\"div\");\n\tdiv2.classList.add(\"food\");\n\tconst food2 = document.createElement(\"img\");\n\tfood2.src = \"menu-images/food2.jpg\";\n\tfood2.classList.add(\"food-img\");\n\tconst br2 = document.createElement(\"br\");\n\tconst foodName2 = document.createElement(\"span\");\n\tfoodName2.textContent = \"pasta\";\n\tdiv2.append(food2);\n\tdiv2.append(br2);\n\tdiv2.append(foodName2);\n\n\t// food three\n\tconst div3 = document.createElement(\"div\");\n\tdiv3.classList.add(\"food\");\n\tconst food3 = document.createElement(\"img\");\n\tfood3.src = \"menu-images/food3.jpg\";\n\tfood3.classList.add(\"food-img\");\n\tconst br3 = document.createElement(\"br\");\n\tconst foodName3 = document.createElement(\"span\");\n\tfoodName3.textContent = \"French Macarons\";\n\tdiv3.append(food3);\n\tdiv3.append(br3);\n\tdiv3.append(foodName3);\n\n\t// food four\n\tconst div4 = document.createElement(\"div\");\n\tdiv4.classList.add(\"food\");\n\tconst food4 = document.createElement(\"img\");\n\tfood4.src = \"menu-images/food4.jpg\";\n\tfood4.classList.add(\"food-img\");\n\tconst br4 = document.createElement(\"br\");\n\tconst foodName4 = document.createElement(\"span\");\n\tfoodName4.textContent = \"Grilled Barbecue\";\n\n\tdiv4.append(food4);\n\tdiv4.append(br4);\n\tdiv4.append(foodName4);\n\n\t// food five\n\tconst div5 = document.createElement(\"div\");\n\tdiv5.classList.add(\"food\");\n\tconst food5 = document.createElement(\"img\");\n\tfood5.src = \"menu-images/food5.jpg\";\n\tfood5.classList.add(\"food-img\");\n\tconst br5 = document.createElement(\"br\");\n\tconst foodName5 = document.createElement(\"span\");\n\tfoodName5.textContent = \"Vegetable Sandwich\";\n\n\tdiv5.append(food5);\n\tdiv5.append(br5);\n\tdiv5.append(foodName5);\n\n\t// food six\n\tconst div6 = document.createElement(\"div\");\n\tdiv6.classList.add(\"food\");\n\tconst food6 = document.createElement(\"img\");\n\tfood6.src = \"menu-images/food6.jpg\";\n\tfood6.classList.add(\"food-img\");\n\tconst br6 = document.createElement(\"br\");\n\tconst foodName6 = document.createElement(\"span\");\n\tfoodName6.textContent = \"Vegetable Salad\";\n\n\tdiv6.append(food6);\n\tdiv6.append(br6);\n\tdiv6.append(foodName6);\n\n\t// food seven\n\tconst div7 = document.createElement(\"div\");\n\tdiv7.classList.add(\"food\");\n\tconst food7 = document.createElement(\"img\");\n\tfood7.src = \"menu-images/food7.jpg\";\n\tfood7.classList.add(\"food-img\");\n\tconst br7 = document.createElement(\"br\");\n\tconst foodName7 = document.createElement(\"span\");\n\tfoodName7.textContent = \"Bowl of Vegetable Salad\";\n\n\tdiv7.append(food7);\n\tdiv7.append(br7);\n\tdiv7.append(foodName7);\n\n\t// food eight\n\tconst div8 = document.createElement(\"div\");\n\tdiv8.classList.add(\"food\");\n\tconst food8 = document.createElement(\"img\");\n\tfood8.src = \"menu-images/food8.jpg\";\n\tfood8.classList.add(\"food-img\");\n\tconst br8 = document.createElement(\"br\");\n\tconst foodName8 = document.createElement(\"span\");\n\tfoodName8.textContent = \"Chips\";\n\n\tdiv8.append(food8);\n\tdiv8.append(br8);\n\tdiv8.append(foodName8);\n\n\t// append food divs to div menu\n\tmenu.append(div1);\n\tmenu.append(div2);\n\tmenu.append(div3);\n\tmenu.append(div4);\n\tmenu.append(div5);\n\tmenu.append(div6);\n\tmenu.append(div7);\n\tmenu.append(div8);\n\n\tmenu.classList.add(\"hide\");\n\n\treturn menu;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foodMenu);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;