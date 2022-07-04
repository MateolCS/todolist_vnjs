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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    name = ''\n    tasks = []\n    constructor(inName, inTasks){\n        this.name = inName\n        this.tasks = inTasks\n    }\n\n    setName(inName){\n        this.name = inName\n    }\n\n    getName(){\n        return this.name\n    }\n\n    getTasks(){\n        return this.tasks\n    }\n\n    getTask(taskName){\n        return this.tasks.find((task) => task.name === taskName)\n    }\n\n    setTasks(inTasks){\n        this.tasks = inTasks\n    }\n\n    addTask(inTask){\n        this.tasks.push(inTask)\n    }\n\n    deleteTask(delTaskName){\n        this.tasks = this.tasks.filter((task) => task.name !== delTaskName)\n    }\n\n    renameTask(taskName, newTaskName){\n        this.tasks.filter((task) => {\n            if(task.getTaskName() === taskName){\n                task.setTaskName(newTaskName)\n            }\n        })\n    }\n\n    changeTaskDescription(taskName, newDescription){\n        this.tasks.filter((task) => {\n            if(task.getTaskName() === taskName){\n                task.setDescription(newDescription)\n            }\n        })\n    }\n\n    changeTaskDueDate(taskName, newDueDate){\n        this.tasks.filter((task) => {\n            if(task.getTaskName() === taskName){\n                task.setDueDate(newDueDate)\n            }\n        })\n    }\n\n    changeTaskStatus(taskName, newStatus){\n        this.tasks.filter((task) =>{\n            if(task.getTaskName() === taskName){\n                task.setStatus(newStatus)\n            }\n        })\n    }\n\n\n}\n\n//# sourceURL=webpack://todo-list/./src/Project.js?");

/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoList */ \"./src/ToDoList.js\");\n\n\n\n\nclass Storage{\n  \n    static setToDoList(inToDoList){\n        localStorage.setItem('toDoList', JSON.stringify(inToDoList))\n    }\n\n    static getToDoList(){\n        const list = Object.assign(new _ToDoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"](),JSON.parse(localStorage.getItem('toDoList')))\n\n        list.setProjects(list.getProjects().map((project) => Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), project)))\n\n        list.getProjects().forEach((project) =>{\n            project.getTasks().map((task) => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), task))\n        })\n\n        list.setCurrentProject(Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), list.getCurrentProject()))\n        list.getCurrentProject().setTasks(list.getCurrentProject().getTasks().map((task) => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), task)))\n\n        return list\n    }\n\n    static addProject(project){\n        const toDoList = Storage.getToDoList()\n        toDoList.addProject(project)\n        Storage.setToDoList(toDoList)\n    }\n\n    static deleteProject(projectName){\n        const toDoList = Storage.getToDoList()\n        toDoList.deleteProject(projectName)\n        Storage.setToDoList(toDoList)\n    }\n\n    static renameProject(projectName, newProjectName){\n        const toDoList = Storage.getToDoList()\n        toDoList.renameProject(projectName, newProjectName)\n        Storage.setToDoList(toDoList)\n    }\n\n    static addTask(projectName, task){\n        const toDoList = Storage.getToDoList()\n        toDoList.addTask(projectName, task)\n        Storage.setToDoList(toDoList)\n    }\n\n    static deleteTask(projectName, taskName){\n        const toDoList = Storage.getToDoList()\n        toDoList.deleteTask(projectName, taskName)\n        Storage.setToDoList(toDoList)\n    }\n\n    static renameTask(projectName, taskName, newTaskName){\n        const toDoList = Storage.getToDoList()\n        toDoList.renameTask(projectName, taskName, newTaskName)\n        Storage.setToDoList(toDoList)\n    }\n\n    static changeTaskDescription(projectName, taskName, newDescription){\n        const toDoList = Storage.getToDoList()\n        toDoList.changeTaskDescription(projectName, taskName, newDescription)\n        Storage.setToDoList(toDoList)\n    }\n\n    static changeTaskDueDate(projectName, taskName, newDueDate){\n        const toDoList = Storage.getToDoList()\n        toDoList.changeTaskDueDate(projectName, taskName, newDueDate)\n        Storage.setToDoList(toDoList)\n    }\n\n    static changeTaskStatus(projectName, taskName, newStatus){\n        const toDoList = Storage.getToDoList()\n        toDoList.changeTaskStatus(projectName, taskName, newStatus)\n        Storage.setToDoList(toDoList)\n    }\n\n    static changeCurrentProject(newCurrentProjectName){\n        const toDoList = Storage.getToDoList()\n        toDoList.changeCurrentProject(newCurrentProjectName)\n        Storage.setToDoList(toDoList)\n    }\n\n    static getCurrentProject(){\n        const toDoList = Storage.getToDoList()\n        return toDoList.getCurrentProject()\n    }\n\n}\n\n//# sourceURL=webpack://todo-list/./src/Storage.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\n    name = ''\n    dueDate = ''\n    description =''\n    status = false\n\n    constructor(inName, inDueDate, inDescription, inStatus){\n        this.name = inName\n        this.dueDate = inDueDate\n        this.description = inDescription\n        this.status = inStatus\n    }\n\n    setTaskName(inTaskName){\n        this.name = inTaskName\n    }\n\n    setDueDate(inDueDate){\n        this.dueDate = inDueDate\n    }\n\n    setDescription(inDescription){\n        this.description = inDescription\n    }\n\n    setStatus(inStatus){\n        this.status = inStatus\n    }\n\n    getTaskName(){\n        return this.name\n    }\n\n    getTaskDueDate(){\n        return this.dueDate\n    }\n\n    getTaskDescription(){\n        return this.description\n    }\n\n    getStatus(){\n        return this.status\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/Task.js?");

/***/ }),

/***/ "./src/ToDoList.js":
/*!*************************!*\
  !*** ./src/ToDoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDoList)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n\n\nclass toDoList{\n    projects = []\n    currentProject = null\n\n    constructor(){\n        this.projects = []\n        this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Default', []))\n        this.currentProject = this.projects[0]\n    }\n\n    addProject(inProject){\n        this.projects.push(inProject)\n    }\n\n    deleteProject(delProjectName){\n        this.projects.filter((project) => project.name === delProjectName)\n    }\n\n    renameProject(projectName, newProjectName){\n        this.projects.filter((project)=>{\n            if(project.getName() === projectName){\n                project.setName(newProjectName)\n            }\n        })\n    }\n    \n    getProjects(){\n        return this.projects\n    }\n\n    setProjects(inProjects){\n        this.projects = inProjects\n    }\n\n    renameTask(projectName, taskName, newTaskName){\n        this.projects.filter((project)=>{\n            if(project.getName() === projectName){\n                project.renameTask(taskName, newTaskName)\n            }\n        })\n    }\n\n    changeTaskDescription(projectName, taskName, newDescription){\n        this.projects.filter((project)=>{\n            if(project.getName() === projectName){\n                project.changeTaskDescription(taskName, newDescription)\n            }\n        })\n    }\n\n    changeTaskDueDate(projectName, taskName, newDueDate){\n        this.projects.filter((project)=>{\n            if(project.getName() === projectName){\n                project.changeTaskDueDate(taskName, newDueDate)\n            }\n        })\n    }\n\n    changeTaskStatus(projectName, taskName, newStatus){\n        this.projects.filter((project)=>{\n            if(project.getName() === projectName){\n                project.changeTaskStatus(taskName, newStatus)\n            }\n        })\n    }\n\n    deleteTask(projectName, taskName){\n        this.projects.filter((project)=>{\n            if(project.getName() === projectName){\n                project.deleteTask(taskName)\n            }\n        })\n    }\n\n    addTask(projectName, inTask){\n        this.projects.filter((project)=>{\n            if(project.getName() === projectName){\n                project.addTask(inTask)\n            }\n        })\n    }\n\n    setCurrentProject(inProject){\n        this.currentProject = inProject\n    }\n\n    getCurrentProject(){\n        return this.currentProject\n    }\n\n    changeCurrentProject(newCurrentProjectName){\n        this.currentProject = this.projects.find((project)=>{\n            if(project.getName() === newCurrentProjectName){\n                return project\n            }\n        })\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/ToDoList.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ \"./src/Storage.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\n\n\nclass UI{\n    constructor(){}\n\n    static initializeUI(){\n        UI.drawTasks()\n        UI.drawProjects()\n    }\n\n    static drawTasks(){\n        const tasks = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentProject().getTasks()\n        const container = document.querySelector('.container')\n\n        tasks.map((task) =>{\n            container.appendChild((0,_Utils__WEBPACK_IMPORTED_MODULE_1__.drawTask)(task))\n        })\n    }\n\n    static drawProjects(){\n        const projects = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getToDoList().getProjects()\n        const container = document.querySelector('#projects')\n\n        projects.map((project) =>{\n            container.appendChild((0,_Utils__WEBPACK_IMPORTED_MODULE_1__.drawProject)(project))\n        })\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/Utils.js":
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawProject\": () => (/* binding */ drawProject),\n/* harmony export */   \"drawTask\": () => (/* binding */ drawTask)\n/* harmony export */ });\n\nconst drawTask = (inTask) => {\n    const task = document.createElement('div')\n    task.classList.add('task')\n\n    const taskTitle = document.createElement('h3')\n    taskTitle.classList.add('task__title')\n    task.setAttribute('id', 'task-title')\n    taskTitle.textContent = inTask.getTaskName()\n\n    const taskDueDate = document.createElement('h4')\n    taskDueDate.classList.add('task__duedate')\n    taskDueDate.setAttribute('id', 'task-duedate')\n    taskDueDate.textContent = inTask.getTaskDueDate()\n\n    const taskDescription = document.createElement('p')\n    taskDescription.classList.add('task__description')\n    taskDescription.setAttribute('id', 'task-description')\n    taskDescription.textContent = inTask.getTaskDescription()\n\n    task.appendChild(taskTitle)\n    task.appendChild(taskDueDate)\n    task.appendChild(taskDescription)\n\n    return task\n}\n\nconst drawProject = (inProject) => {\n    const project = document.createElement('li')\n    project.classList.add('main__nav__list__item')\n    project.textContent = inProject.getName()\n\n    return project\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/Utils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n\n\n// import Project from './Project'\n// import Task from './Task'\n// import toDoList from './ToDoList'\n// import Storage from './Storage'\n\n\n// const lista = new toDoList()\n\n//  const task1 = new Task('1', '10.10.2022', 'go out with dog', 1)\n//  const task2 = new Task('2', '10.10.2022', 'go out with dog', 1)\n//  const task3 = new Task('3', '10.10.2022', 'go out with dog', 1)\n//  const task4 = new Task('4', '10.10.2022', 'go out with dog', 1)\n\n// const newtask = new Task('Gym', '10.10.2022', 'workout time', 1)\n\n// const tasks = [task1, task2, task3, task4, newtask]\n\n// const project = new Project('test', tasks)\n// const project2 = new Project('test2', tasks)\n\n// lista.addProject(project)\n// lista.addProject(project2)\n// console.log(lista)\n// Storage.setToDoList(lista)\n// Storage.renameProject('test', 'dzienki działa')\n// const lista2 = Storage.getToDoList()\n// console.log(lista2)\n// Storage.changeCurrentProject('dzienki działa')\n// const lista3 = Storage.getToDoList()\n// console.log(lista3)\n\n\n_UI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeUI()\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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