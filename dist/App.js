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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    name = ''\n    tasks = []\n    constructor(inName, inTasks){\n        this.name = inName\n        this.tasks = inTasks\n    }\n\n    setName(inName){\n        this.name = inName\n    }\n\n    getName(){\n        return this.name\n    }\n\n    getTasks(){\n        return this.tasks\n    }\n\n    getTask(taskName){\n        return this.tasks.find((task) => task.name === taskName)\n    }\n\n    setTasks(inTasks){\n        this.tasks = inTasks\n    }\n\n    addTask(inTask){\n        this.tasks.push(inTask)\n    }\n\n    deleteTask(delTaskName){\n        this.tasks = this.tasks.filter((task) => task.name !== delTaskName)\n    }\n\n    renameTask(taskName, newTaskName){\n        this.tasks.filter((task) => {\n            if(task.getTaskName() === taskName){\n                task.setTaskName(newTaskName)\n            }\n        })\n    }\n\n    changeTaskDescription(taskName, newDescription){\n        this.tasks.filter((task) => {\n            if(task.getTaskName() === taskName){\n                task.setDescription(newDescription)\n            }\n        })\n    }\n\n    changeTaskPriority(taskName, newPriority){\n        this.tasks.filter((task) => {\n            if(task.getTaskName() === taskName){\n                task.setPriority(newPriority)\n            }\n        })\n    }\n\n    changeTaskDueDate(taskName, newDueDate){\n        this.tasks.filter((task) => {\n            if(task.getTaskName() === taskName){\n                task.setDueDate(newDueDate)\n            }\n        })\n    }\n\n\n}\n\n//# sourceURL=webpack://todo-list/./src/Project.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\n    name = ''\n    dueDate = ''\n    description =''\n    priority = 1\n\n    constructor(inName, inDueDate, inDescription, inPriority){\n        this.name = inName\n        this.dueDate = inDueDate\n        this.description = inDescription\n        this.priority = inPriority\n    }\n\n    setTaskName(inTaskName){\n        this.name = inTaskName\n    }\n\n    setDueDate(inDueDate){\n        this.dueDate = inDueDate\n    }\n\n    setDescription(inDescription){\n        this.description = inDescription\n    }\n\n    setPriority(inPriority){\n        this.priority = inPriority\n    }\n\n    getTaskName(){\n        return this.name\n    }\n\n    getTaskDueDate(){\n        return this.dueDate\n    }\n\n    getTaskDescription(){\n        return this.description\n    }\n\n    getPriority(){\n        return this.priority\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/Task.js?");

/***/ }),

/***/ "./src/ToDoList.js":
/*!*************************!*\
  !*** ./src/ToDoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDoList)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n\n\n\nclass toDoList{\n    projects = []\n\n    constructor(){\n        this.projects = []\n        this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Default', []))\n    }\n\n    addProject(inProject){\n        this.projects.push(inProject)\n    }\n\n    deleteProject(delProjectName){\n        this.projects.filter((project) => project.name === delProjectName)\n    }\n    \n    getProjects(){\n        return this.projects\n    }\n\n    setProjects(inProjects){\n        this.projects = inProjects\n    }\n\n    renameTask(projectName, taskName, newTaskName){\n        this.projects.filter((project)=>{\n            if(project.getName() === projectName){\n                project.renameTask(taskName, newTaskName)\n            }\n        })\n    }\n\n    changeTaskDescription(projectName, taskName, newDescription){\n        this.projects.filter((project)=>{\n            if(project.getName() === projectName){\n                project.changeTaskDescription(taskName, newDescription)\n            }\n        })\n    }\n\n    changeTaskPriority(projectName, taskName, newPriority){\n        this.projects.filter((project)=>{\n            if(project.getName() === projectName){\n                project.changeTaskPriority(taskName, newPriority)\n            }\n        })\n    }\n\n    changeTaskDueDate(projectName, taskName, newDueDate){\n        this.projects.filter((project)=>{\n            if(project.getName() === projectName){\n                project.changeTaskDueDate(taskName, newDueDate)\n            }\n        })\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/ToDoList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoList */ \"./src/ToDoList.js\");\n\n\n\n\n\nconst lista = new _ToDoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\n\n const task1 = new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('1', '10.10.2022', 'go out with dog', 1)\n const task2 = new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('2', '10.10.2022', 'go out with dog', 1)\n const task3 = new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('3', '10.10.2022', 'go out with dog', 1)\n const task4 = new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('4', '10.10.2022', 'go out with dog', 1)\n\nconst newtask = new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Gym', '10.10.2022', 'workout time', 1)\n\nconst tasks = [task1, task2, task3, task4, newtask]\n\nconst project = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('test', tasks)\n\nconsole.log(lista)\nlista.addProject(project)\nconsole.log(lista)\nlista.renameTask('test', '1', 'dzienki działa')\nconsole.log(lista)\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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