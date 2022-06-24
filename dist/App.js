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

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    name = ''\n    tasks = []\n    constructor(inName, inTasks){\n        this.name = inName\n        this.tasks = inTasks\n    }\n\n    setName(inName){\n        this.name = inName\n    }\n\n    getName(){\n        return this.name\n    }\n\n    getTasks(){\n        return this.tasks\n    }\n\n    setTasks(inTasks){\n        this.tasks = inTasks\n    }\n\n    addTask(inTask){\n        this.tasks.push(inTask)\n    }\n\n    deleteTask(delTaskName){\n        this.tasks = this.tasks.filter((task) => task.name !== delTaskName)\n    }\n\n\n}\n\n//# sourceURL=webpack://todo-list/./src/Project.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\n    name = ''\n    dueDate = ''\n    description =''\n    priority = 1\n\n    constructor(inName, inDueDate, inDescription, inPriority){\n        this.name = inName\n        this.dueDate = inDueDate\n        this.description = inDescription\n        this.priority = inPriority\n    }\n\n    setTaskName(inTaskName){\n        this.name = inTaskName\n    }\n\n    setDueDate(inDueDate){\n        this.dueDate = inDueDate\n    }\n\n    setDescription(inDescription){\n        this.description = inDescription\n    }\n\n    setPriority(inPriority){\n        this.priority = inPriority\n    }\n\n    getTaskName(){\n        return this.name\n    }\n\n    getTaskDueDate(){\n        return this.dueDate\n    }\n\n    getTaskDescription(){\n        return this.description\n    }\n\n    getPriority(){\n        return this.priority\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/Task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n\n\n\nconst task1 = new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Dog', '10.10.2022', 'go out with dog', 1)\nconst task2 = new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Dog', '10.10.2022', 'go out with dog', 1)\nconst task3 = new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Dog', '10.10.2022', 'go out with dog', 1)\nconst task4 = new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Dog', '10.10.2022', 'go out with dog', 1)\n\nconst newtask = new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Gym', '10.10.2022', 'workout time', 1)\n\nconst tasks = [task1, task2, task3, task4]\n\n\n\n\nconst testProject = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Chores', tasks)\n\nconsole.log(testProject)\ntestProject.addTask(newtask)\nconsole.log(testProject)\n// testProject.deleteTask('Dog')\n// console.log(testProject)\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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