/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const imgItems = document.querySelectorAll('.slider_list_item');\r\n\r\nconsole.log(imgItems);\r\n\r\nimgItems.forEach((i) => {\r\n  i.addEventListener('click', (event) => {\r\n    chooseActive(event.target);\r\n  });\r\n});\r\n\r\nfunction chooseActive(element) {\r\n  imgItems.forEach((item) => {\r\n    console.log(`i: ${item}`, element.parentElement);\r\n    item === element.parentElement\r\n      ? element.parentElement.classList.add('active_item')\r\n      : item.classList.remove('active_item');\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://odin-slider/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;