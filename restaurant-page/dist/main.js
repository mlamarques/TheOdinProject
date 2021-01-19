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

/***/ "./src/contactTab.js":
/*!***************************!*\
  !*** ./src/contactTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactTab\": () => /* binding */ contactTab\n/* harmony export */ });\nfunction contactTab() {\r\n    const TabsContent = document.querySelector(\"div.tab__content\")\r\n    if (TabsContent.hasChildNodes()) {\r\n        TabsContent.innerHTML = ''\r\n    }\r\n\r\n    const newContactDiv = document.createElement(\"div\")\r\n    newContactDiv.classList.add(\"detail-section\")\r\n    const iconWrapper = document.createElement(\"div\")\r\n    iconWrapper.classList.add(\"icon-wrapper\")\r\n    const icon = document.createElement(\"i\")\r\n    icon.classList.add(\"fas\", \"fa-map-marker-alt\")\r\n    const pContact = document.createElement(\"p\")\r\n    pContact.classList.add(\"content\")\r\n    pContact.innerHTML = \"Avenida Ayrton Senna da Silva, s/n - Sítio do Campo <br> Praia Grande - SP\"\r\n\r\n    TabsContent.appendChild(newContactDiv)\r\n    newContactDiv.appendChild(iconWrapper)\r\n    iconWrapper.appendChild(icon)\r\n    newContactDiv.appendChild(pContact)\r\n\r\n    const newContactDiv2 = newContactDiv.cloneNode(true)\r\n    newContactDiv2.innerHTML = ''\r\n    const iconWrapper2 = iconWrapper.cloneNode(true)\r\n    iconWrapper2.innerHTML = ''\r\n    const icon2 = document.createElement(\"i\")\r\n    icon2.classList.add(\"fas\", \"fa-phone\")\r\n    const pContact2 = pContact.cloneNode(true)\r\n    pContact2.innerHTML = \"(11) 3922-2100\"\r\n\r\n    TabsContent.appendChild(newContactDiv2)\r\n    newContactDiv2.appendChild(iconWrapper2)\r\n    iconWrapper2.appendChild(icon2)\r\n    newContactDiv2.appendChild(pContact2)\r\n\r\n    const newContactDiv3 = newContactDiv.cloneNode(true)\r\n    newContactDiv3.innerHTML = ''\r\n    const iconWrapper3 = iconWrapper.cloneNode(true)\r\n    iconWrapper3.innerHTML = ''\r\n    const icon3 = document.createElement(\"i\")\r\n    icon3.classList.add(\"fas\", \"fa-clock\")\r\n    const pContact3 = pContact.cloneNode(true)\r\n    pContact3.innerHTML = \"<b>Horário de funcionamento:</b>\"\r\n    const pContact4 = pContact.cloneNode(true)\r\n    pContact4.innerHTML = \"seg-dom: 18:00 - 23:00\"\r\n\r\n    TabsContent.appendChild(newContactDiv3)\r\n    newContactDiv3.appendChild(iconWrapper3)\r\n    iconWrapper3.appendChild(icon3)\r\n    newContactDiv3.appendChild(pContact3)\r\n    newContactDiv3.appendChild(pContact4)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contactTab.js?");

/***/ }),

/***/ "./src/homeTab.js":
/*!************************!*\
  !*** ./src/homeTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeTab\": () => /* binding */ homeTab\n/* harmony export */ });\nfunction homeTab() {\r\n    const TabsContent = document.querySelector(\"div.tab__content\")\r\n    if (TabsContent.hasChildNodes()) {\r\n        TabsContent.innerHTML = ''\r\n    }\r\n    const newHomeTab = document.createElement(\"div\")\r\n    newHomeTab.classList.add(\"tab__content\")\r\n    const pageTitle = document.createElement(\"h3\")\r\n    pageTitle.innerText = \"Le Cottage Bleu\"\r\n    const imageDiv = document.createElement(\"figure\")\r\n    imageDiv.setAttribute(\"id\", \"img-div\")\r\n    const imageFile = document.createElement(\"img\")\r\n    imageFile.setAttribute(\"src\", \"https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260\")\r\n    imageFile.setAttribute(\"alt\", \"cooking photo\")\r\n    imageFile.setAttribute(\"height\", \"400rem\")\r\n    const homeTxt = document.createElement(\"p\")\r\n    //imageCaption.setAttribute(\"id\", \"img-caption\")\r\n    homeTxt.innerText = \"First class cuisine.\"\r\n\r\n    //pageContent.appendChild(headerDiv)\r\n    TabsContent.appendChild(newHomeTab)\r\n    newHomeTab.appendChild(pageTitle)\r\n    newHomeTab.appendChild(imageDiv)\r\n    imageDiv.appendChild(imageFile)\r\n    newHomeTab.appendChild(homeTxt)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/homeTab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page.js */ \"./src/initial-page.js\");\n/* harmony import */ var _homeTab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeTab.js */ \"./src/homeTab.js\");\n/* harmony import */ var _menuTab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuTab.js */ \"./src/menuTab.js\");\n/* harmony import */ var _contactTab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactTab.js */ \"./src/contactTab.js\");\n\r\n\r\n\r\n\r\n\r\nconsole.log(\"start project\")\r\nconst tabHome = document.querySelector(\"#home-tab\")\r\nconst tabMenu = document.querySelector(\"#menu-tab\")\r\nconst tabContact = document.querySelector(\"#contact-tab\")\r\n\r\n;(0,_initial_page_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)()\r\n\r\ntabHome.addEventListener('click', _homeTab_js__WEBPACK_IMPORTED_MODULE_1__.homeTab)\r\ntabMenu.addEventListener('click', _menuTab_js__WEBPACK_IMPORTED_MODULE_2__.menuTab)\r\ntabContact.addEventListener('click', _contactTab_js__WEBPACK_IMPORTED_MODULE_3__.contactTab)\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initial-page.js":
/*!*****************************!*\
  !*** ./src/initial-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => /* binding */ pageLoad\n/* harmony export */ });\nfunction pageLoad() {\r\n    // const pageContent = document.querySelector(\"div#content\")\r\n    // const headerDiv = document.createElement(\"div\")\r\n    // headerDiv.classList.add(\"header\")\r\n    // const pageTitle = document.createElement(\"h1\")\r\n    // pageTitle.innerText = \"Le Cottage Bleu\"\r\n    // const imageDiv = document.createElement(\"figure\")\r\n    // imageDiv.setAttribute(\"id\", \"img-div\")\r\n    // const imageFile = document.createElement(\"img\")\r\n    // imageFile.setAttribute(\"src\", \"https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260\")\r\n    // imageFile.setAttribute(\"alt\", \"cooking photo\")\r\n    // imageFile.setAttribute(\"height\", \"500rem\")\r\n    // const imageCaption = document.createElement(\"figcaption\")\r\n    // imageCaption.setAttribute(\"id\", \"img-caption\")\r\n    // imageCaption.innerText = \"First class cuisine.\"\r\n\r\n    // pageContent.appendChild(headerDiv)\r\n    // pageContent.appendChild(imageDiv)\r\n    // headerDiv.appendChild(pageTitle)\r\n    // imageDiv.appendChild(imageFile)\r\n    // imageDiv.appendChild(imageCaption)\r\n    const TabsContent = document.querySelector(\"div.tab__content\")\r\n    const newHomeTab = document.createElement(\"div\")\r\n    newHomeTab.classList.add(\"tab__content\")\r\n    const pageTitle = document.createElement(\"h3\")\r\n    pageTitle.innerText = \"Le Cottage Bleu\"\r\n    const imageDiv = document.createElement(\"figure\")\r\n    imageDiv.setAttribute(\"id\", \"img-div\")\r\n    const imageFile = document.createElement(\"img\")\r\n    imageFile.setAttribute(\"src\", \"https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260\")\r\n    imageFile.setAttribute(\"alt\", \"cooking photo\")\r\n    imageFile.setAttribute(\"height\", \"400rem\")\r\n    const homeTxt = document.createElement(\"p\")\r\n    //imageCaption.setAttribute(\"id\", \"img-caption\")\r\n    homeTxt.innerText = \"First class cuisine.\"\r\n\r\n    //pageContent.appendChild(headerDiv)\r\n    TabsContent.appendChild(newHomeTab)\r\n    newHomeTab.appendChild(pageTitle)\r\n    newHomeTab.appendChild(imageDiv)\r\n    imageDiv.appendChild(imageFile)\r\n    newHomeTab.appendChild(homeTxt)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/initial-page.js?");

/***/ }),

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuTab\": () => /* binding */ menuTab\n/* harmony export */ });\nfunction menuTab() {\r\n    const TabsContent = document.querySelector(\"div.tab__content\")\r\n    if (TabsContent.hasChildNodes()) {\r\n        TabsContent.innerHTML = ''\r\n    }\r\n    //const headerDiv = document.createElement(\"div\")\r\n    //headerDiv.classList.add(\"header\")\r\n    //const newMenuTab = document.createElement(\"div\")\r\n    //newMenuTab.classList.add(\"tab-wrap\")\r\n    const newMenuTab = document.createElement(\"div\")\r\n    newMenuTab.classList.add(\"tab__content\")\r\n    const pageTitle = document.createElement(\"h3\")\r\n    pageTitle.innerText = \"MENU\"\r\n    const homeTxt = document.createElement(\"p\")\r\n    //imageCaption.setAttribute(\"id\", \"img-caption\")\r\n    homeTxt.innerText = \"This is the menu: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet\"\r\n\r\n    //pageContent.appendChild(headerDiv)\r\n    TabsContent.appendChild(newMenuTab)\r\n    newMenuTab.appendChild(pageTitle)\r\n    newMenuTab.appendChild(homeTxt)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuTab.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;