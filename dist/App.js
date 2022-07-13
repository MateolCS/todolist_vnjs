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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n\n\nclass Project {\n    name = ''\n    tasks = []\n    constructor(inName, inTasks){\n        this.name = inName\n        this.tasks = inTasks\n    }\n\n    setName(inName){\n        this.name = inName\n    }\n\n    getName(){\n        return this.name\n    }\n\n    getTasks(){\n        return this.tasks\n    }\n\n    getTask(taskName){\n        return this.tasks.find((task) => task.name === taskName)\n    }\n\n    setTasks(inTasks){\n        this.tasks = inTasks\n    }\n\n    addTask(inTask){\n        this.tasks.push(inTask)\n    }\n\n    deleteTask(delTaskName){\n        this.tasks = this.tasks.filter((task) => task.name !== delTaskName)\n    }\n\n    renameTask(taskName, newTaskName){\n        this.tasks.filter((task) => {\n            if(task.getTaskName() === taskName){\n                task.setTaskName(newTaskName)\n            }\n        })\n    }\n\n    changeTaskDescription(taskName, newDescription){\n        this.tasks.filter((task) => {\n            if(task.getTaskName() === taskName){\n                task.setDescription(newDescription)\n            }\n        })\n    }\n\n    changeTaskDueDate(taskName, newDueDate){\n        this.tasks.filter((task) => {\n            if(task.getTaskName() === taskName){\n                task.setDueDate(newDueDate)\n            }\n        })\n    }\n\n    changeTaskStatus(taskName){\n        this.tasks.filter((task) =>{\n            if(task.getTaskName() === taskName){\n                task.setStatus()\n            }\n        })\n    }\n\n    taskExists(taskName){\n        return this.tasks.some((task) => task.getTaskName() === taskName)\n    }\n\n\n}\n\n//# sourceURL=webpack://todo-list/./src/Project.js?");

/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoList */ \"./src/ToDoList.js\");\n\n\n\n\nclass Storage{\n  \n    static setToDoList(inToDoList){\n        localStorage.setItem('toDoList', JSON.stringify(inToDoList))\n    }\n\n    static getToDoList(){\n        const list = Object.assign(new _ToDoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"](),JSON.parse(localStorage.getItem('toDoList')))\n\n        list.setProjects(list.getProjects().map((project) => Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), project)))\n\n\n        list.getProjects().forEach((project) =>{\n            if(project.getTasks() === undefined){\n                project.setTasks([])\n            }\n            project.setTasks(project.getTasks().map((task) => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), task)))\n        })\n\n        list.setCurrentProject(Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), list.getCurrentProject()))\n        list.getCurrentProject().setTasks(list.getCurrentProject().getTasks().map((task) => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), task)))\n\n        return list\n    }\n\n    static addProject(project){\n        const toDoList = Storage.getToDoList()\n        toDoList.addProject(project)\n        Storage.setToDoList(toDoList)\n    }\n\n    static deleteProject(projectName){\n        const toDoList = Storage.getToDoList()\n        toDoList.deleteProject(projectName)\n        Storage.setToDoList(toDoList)\n    }\n\n    static renameProject(projectName, newProjectName){\n        const toDoList = Storage.getToDoList()\n        toDoList.renameProject(projectName, newProjectName)\n        Storage.setToDoList(toDoList)\n    }\n\n    static addTask(task){\n        const toDoList = Storage.getToDoList()\n        toDoList.addTask(task)\n        Storage.setToDoList(toDoList)\n    }\n\n    static deleteTask(taskName){\n        const toDoList = Storage.getToDoList()\n        toDoList.deleteTask(taskName)\n        Storage.setToDoList(toDoList)\n    }\n\n    static renameTask(taskName, newTaskName){\n        const toDoList = Storage.getToDoList()\n        toDoList.changeTaskName(taskName, newTaskName)\n        Storage.setToDoList(toDoList)\n    }\n\n    static changeTaskDescription(taskName, newDescription){\n        const toDoList = Storage.getToDoList()\n        toDoList.changeTaskDescription(taskName, newDescription)\n        Storage.setToDoList(toDoList)\n    }\n\n    static changeTaskDueDate(taskName, newDueDate){\n        const toDoList = Storage.getToDoList()\n        toDoList.changeTaskDueDate(taskName, newDueDate)\n        Storage.setToDoList(toDoList)\n    }\n\n    static changeTaskStatus(taskName){\n        const toDoList = Storage.getToDoList()\n        toDoList.changeTaskStatus(taskName)\n        Storage.setToDoList(toDoList)\n    }\n\n    static changeCurrentProject(newCurrentProjectName){\n        const toDoList = Storage.getToDoList()\n        toDoList.changeCurrentProject(newCurrentProjectName)\n        Storage.setToDoList(toDoList)\n    }\n\n    static getCurrentProject(){\n        const toDoList = Storage.getToDoList()\n        return toDoList.getCurrentProject()\n    }\n\n    static modifyTask(oldTask, newTask){\n        const toDoList = Storage.getToDoList()\n        if(oldTask.getTaskName() !== newTask.getTaskName() && newTask.getTaskName() !== ''){\n            toDoList.changeTaskName(oldTask.getTaskName(), newTask.getTaskName())\n        }\n\n        if(oldTask.getTaskDescription() !== newTask.getTaskDescription() && newTask.getTaskDescription() !== ''){\n            toDoList.changeTaskDescription(oldTask.getTaskName(), newTask.getTaskDescription())\n        }\n\n        if(oldTask.getTaskDueDate() !== newTask.getTaskDueDate() && newTask.getTaskDueDate() !== ''){\n            toDoList.changeTaskDueDate(oldTask.getTaskName(), newTask.getTaskDueDate())\n        }\n\n        Storage.setToDoList(toDoList)\n    }\n\n\n}\n\n//# sourceURL=webpack://todo-list/./src/Storage.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\n    name = ''\n    dueDate = ''\n    description =''\n    status = false\n\n    constructor(inName, inDueDate, inDescription, inStatus){\n        this.name = inName\n        this.dueDate = inDueDate\n        this.description = inDescription\n        this.status = inStatus\n    }\n\n    setTaskName(inTaskName){\n        this.name = inTaskName\n    }\n\n    setDueDate(inDueDate){\n        this.dueDate = inDueDate\n    }\n\n    setDescription(inDescription){\n        this.description = inDescription\n    }\n\n    setStatus(inStatus){\n        this.status = inStatus\n    }\n\n    getTaskName(){\n        return this.name\n    }\n\n    getTaskDueDate(){\n        return this.dueDate\n    }\n\n    getTaskDescription(){\n        return this.description\n    }\n\n    getStatus(){\n        return this.status\n    }\n\n    setStatus(){\n        this.status = !this.status\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/Task.js?");

/***/ }),

/***/ "./src/ToDoList.js":
/*!*************************!*\
  !*** ./src/ToDoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDoList)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n\n\nclass toDoList{\n    projects = []\n    currentProject = null\n\n    constructor(){\n        this.projects = []\n        this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Default', []))\n        this.currentProject = this.projects[0]\n    }\n\n    addProject(inProject){\n        this.projects.push(inProject)\n    }\n\n    deleteProject(delProjectName){\n        this.projects.filter((project) => project.name === delProjectName)\n    }\n\n    renameProject(projectName, newProjectName){\n        this.projects.filter((project)=>{\n            if(project.getName() === projectName){\n                project.setName(newProjectName)\n            }\n        })\n    }\n    \n    getProjects(){\n        return this.projects\n    }\n\n    setProjects(inProjects){\n        this.projects = inProjects\n    }\n\n    changeTaskName(taskName, newTaskName){\n        this.currentProject.renameTask(taskName, newTaskName)\n        this.projects.filter((project)=>{\n            if(project.getName() === this.currentProject.getName()){\n                project.renameTask(taskName, newTaskName)\n            }\n        })\n    }\n\n    changeTaskDescription(taskName, newDescription){\n        this.currentProject.changeTaskDescription(taskName, newDescription)\n        this.projects.filter((project)=>{\n            if(project.getName() === this.currentProject.getName()){\n                project.changeTaskDescription(taskName, newDescription)\n            }\n        })\n    }\n\n    changeTaskDueDate(taskName, newDueDate){\n        this.currentProject.changeTaskDueDate(taskName, newDueDate)\n        this.projects.filter((project)=>{\n            if(project.getName() === this.currentProject.getName()){\n                project.changeTaskDueDate(taskName, newDueDate)\n            }\n        })\n    }\n\n    changeTaskStatus(taskName){\n        this.currentProject.changeTaskStatus(taskName)\n        this.projects.filter((project)=>{\n            if(project.getName() === this.currentProject.getName()){\n                project.changeTaskStatus(taskName)\n            }\n        })\n    }\n\n    deleteTask(taskName){\n        this.currentProject.deleteTask(taskName)\n        this.projects.filter((project)=>{\n            if(project.getName() === this.currentProject.getName()){\n                project.deleteTask(taskName)\n            }\n        })\n    }\n\n    addTask(inTask){\n        this.currentProject.addTask(inTask)\n        this.projects.filter((project)=>{\n            if(project.getName() === this.currentProject.getName()){\n                project.addTask(inTask)\n            }\n        })\n    }\n\n    setCurrentProject(inProject){\n        this.currentProject = inProject\n    }\n\n    getCurrentProject(){\n        return this.currentProject\n    }\n\n    changeCurrentProject(newCurrentProjectName){\n        this.currentProject = this.projects.find((project)=>{\n            if(project.getName() === newCurrentProjectName){\n                return project\n            }\n        })\n    }\n\n    projectExists(projectName){\n        return this.projects.some((project) => project.getName() === projectName)\n    }\n\n}\n\n//# sourceURL=webpack://todo-list/./src/ToDoList.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ \"./src/Storage.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ \"./src/Utils.js\");\n\n\n\nclass UI{\n    constructor(){}\n\n    static initializeUI(){\n        UI.drawTasks()\n        UI.drawProjects()\n        UI.addEvents()\n        UI.taskTitles()\n        UI.tasksStatus()\n        UI.deleteTask()\n    }\n\n    static drawTasks(){\n        const tasks = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentProject().getTasks()\n        const container = document.querySelector('.container')\n        container.innerHTML = ''\n\n        tasks.map((task) =>{\n            container.appendChild((0,_Utils__WEBPACK_IMPORTED_MODULE_1__.drawTask)(task))\n        })\n        UI.taskTitles()\n    }\n\n    static drawProjects(){\n        const projects = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getToDoList().getProjects()\n        const container = document.querySelector('#projects')\n        container.innerHTML = ''\n        projects.map((project) =>{\n            container.appendChild((0,_Utils__WEBPACK_IMPORTED_MODULE_1__.drawProject)(project))\n        })\n        UI.projectSwap()\n\n    }\n\n    static addEvents(){\n        const addProject = document.querySelector('#add-project')\n        addProject.addEventListener('click', (e) =>{\n            const addProjectModal = document.querySelector('#project-modal')\n            addProjectModal.style.display = 'block'\n\n            const addProjectButton = document.querySelector('#add-project-button')\n            addProjectButton.addEventListener('click', () =>{\n                const project = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getNewProject)()\n                const toDoList = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getToDoList()\n                if(toDoList.projectExists(project.getName())){\n                    alert('Project already exists')\n                    addProjectModal.style.display = 'none'\n                }else{\n                    _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(project)\n                    UI.drawProjects()\n                    addProjectModal.style.display = 'none'\n                }\n            })\n        })\n\n        const addTask = document.querySelector('#open-addtask-modal')\n        addTask.addEventListener('click', () =>{\n            const addTaskModal = document.querySelector('#add-task-modal')\n            addTaskModal.style.display = 'block'\n\n            const addTaskButton = document.querySelector('#add-task')\n            addTaskButton.addEventListener('click', () =>{\n                const task = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getNewTask)()\n                if(task === undefined){\n                    return\n                }\n                _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask(task)\n                UI.drawTasks()\n                addTaskModal.style.display = 'none'\n            })\n        })\n\n        \n    }\n\n    static projectSwap(){\n        const projects = document.querySelectorAll('.main__nav__list__item')\n        projects.forEach((project) =>{\n            project.addEventListener('click', (e) =>{\n                _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeCurrentProject(e.target.textContent)\n                UI.drawTasks()\n                UI.taskTitles()\n                UI.tasksStatus()\n                UI.deleteTask()\n            })\n        })\n    }\n\n    static taskTitles(){\n        const tasksTitles = document.querySelectorAll('.task__title')\n        tasksTitles.forEach((taskTitle) =>{\n            taskTitle.addEventListener('click', (e)=>{\n                let selectedTitle = e.target.textContent\n                let selectedTask = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentProject().getTask(selectedTitle)\n                const taskModal = document.querySelector('#modify-task-modal')\n                taskModal.style.display = 'block'\n\n                const modifyTask = document.querySelector('#modify-task')\n                modifyTask.addEventListener('click', () =>{\n                    const changedTask = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getModifyTask)()\n                    if(changedTask === undefined){\n                        return\n                    }\n                    _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modifyTask(selectedTask, changedTask)\n                    document.location.reload(true)\n                    taskModal.style.display = 'none'\n                })\n            })\n        })\n\n    }\n\n    static tasksStatus(){\n        const tasks = document.querySelectorAll('.task')\n        tasks.forEach((task) =>{\n            task.addEventListener('dblclick', (e) =>{\n                const taskTitle = task.firstChild.textContent\n                _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeTaskStatus(taskTitle)\n                UI.drawTasks()\n                UI.tasksStatus()\n            })\n        })\n    }\n\n    static deleteTask(){\n        const deleteButtons = document.querySelectorAll('.task__delete')\n        deleteButtons.forEach((deleteButton) =>{\n            deleteButton.addEventListener('click', (e) =>{\n                const taskTitle = e.target.parentNode.firstChild.nextSibling.textContent\n                _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTask(taskTitle)\n                UI.drawTasks()\n                UI.tasksStatus()\n            })\n        })\n    }\n\n}\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/Utils.js":
/*!**********************!*\
  !*** ./src/Utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawProject\": () => (/* binding */ drawProject),\n/* harmony export */   \"drawTask\": () => (/* binding */ drawTask),\n/* harmony export */   \"getModifyTask\": () => (/* binding */ getModifyTask),\n/* harmony export */   \"getNewProject\": () => (/* binding */ getNewProject),\n/* harmony export */   \"getNewTask\": () => (/* binding */ getNewTask),\n/* harmony export */   \"modifyTaskUI\": () => (/* binding */ modifyTaskUI),\n/* harmony export */   \"windowEvent\": () => (/* binding */ windowEvent)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Storage */ \"./src/Storage.js\");\n\n\n\n\n\nconst drawTask = (inTask) => {\n    const task = document.createElement('div')\n    task.classList.add('task')\n\n    const taskTitle = document.createElement('h3')\n    taskTitle.classList.add('task__title')\n    task.setAttribute('id', 'task-title')\n    taskTitle.textContent = inTask.getTaskName()\n\n    const taskDueDate = document.createElement('h4')\n    taskDueDate.classList.add('task__duedate')\n    taskDueDate.setAttribute('id', 'task-duedate')\n    taskDueDate.textContent = inTask.getTaskDueDate()\n\n    const taskDescription = document.createElement('p')\n    taskDescription.classList.add('task__description')\n    taskDescription.setAttribute('id', 'task-description')\n    taskDescription.textContent = inTask.getTaskDescription()\n\n    const deleteTask = document.createElement('i')\n    deleteTask.classList.add('fa-solid', 'fa-xmark', 'task__delete')\n\n    const taskStatus = inTask.getStatus()\n    if(taskStatus){\n        task.classList.add('task__done')\n    }\n    task.appendChild(deleteTask)\n    task.appendChild(taskTitle)\n    task.appendChild(taskDueDate)\n    task.appendChild(taskDescription)\n\n    return task\n}\n\nconst drawProject = (inProject) => {\n    const project = document.createElement('li')\n    project.classList.add('main__nav__list__item')\n    project.textContent = inProject.getName()\n\n    return project\n}\n\nconst getNewProject = () => {\n    const projectInput = document.querySelector('#add-project-input')\n    const projectName = projectInput.value\n    if(projectName === ''){\n        return\n    }\n    const project = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectName)\n    projectInput.value = ''\n\n    return project\n}\n\nconst getNewTask = () => {\n    const taskInput = document.querySelector('#add-task-taskname')\n    const taskName = taskInput.value\n\n    const taskDueDateInput = document.querySelector('#add-task-duedate')\n    const taskDueDate = taskDueDateInput.value\n\n    const taskDescriptionInput = document.querySelector('#add-task-description')\n    const taskDescription = taskDescriptionInput.value\n\n    const statusInput = document.querySelector('#add-task-status')\n    const status = statusInput.value === 'important' ? true : false\n\n    if(taskName === '' || taskDueDate === '' || taskDescription === ''){\n        alert('Please fill in all fields')\n    }else{\n        const task = new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](taskName, taskDueDate, taskDescription, status)\n\n        taskInput.value = ''\n        taskDueDateInput.value = ''\n        taskDescriptionInput.value = ''\n        statusInput.value = ''\n\n        return task\n    }\n}\n\nconst windowEvent = (modal) => {\n\n    window.addEventListener('click', (e)=>{\n        if(e.target !== modal){\n            modal.style.display = 'none'\n        }\n    })\n}\n\nconst getModifyTask = () => {\n\n    const newTaskName = document.querySelector('#modify-task-newname')\n    const newName = newTaskName.value\n\n    const newTaskDueDate = document.querySelector('#modify-task-newduedate')\n    const newDueDate = newTaskDueDate.value\n\n    const newTaskDescription = document.querySelector('#modify-task-newdesc')\n    const newDescription = newTaskDescription.value\n\n    const modifiedTask = new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](newName, newDueDate, newDescription)\n\n    newTaskName.value = ''\n    newTaskDueDate.value = ''\n    newTaskDescription.value = ''\n\n    return modifiedTask\n}\n\nconst modifyTaskUI = (task) => {\n    const taskModal = document.querySelector('#modify-task-modal')\n    const changedTask = getModifyTask()\n    if(changedTask === undefined){\n        return\n    }\n    _Storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].modifyTask(task, changedTask)\n    _UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawTasks()\n    taskModal.style.display = 'none'\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/Utils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n\n\n// import Project from './Project'\n// import Task from './Task'\n// import toDoList from './ToDoList'\n// import Storage from './Storage'\n\n\n// const lista = new toDoList()\n\n// const task1 = new Task('1', '10.10.2022', 'go out with dog', false)\n// const task2 = new Task('2', '10.10.2022', 'go out with dog', false)\n// const task3 = new Task('3', '10.10.2022', 'go out with dog', true)\n// const task4 = new Task('4', '10.10.2022', 'go out with dog', false)\n\n// const newtask = new Task('Gym', '10.10.2022', 'workout time', true)\n\n// const tasks = [task1, task2, task3, task4, newtask]\n\n// const project = new Project('test', tasks)\n// const project2 = new Project('test2', tasks)\n\n\n// lista.addProject(project)\n// lista.addProject(project2)\n// //console.log(lista)\n// lista.setCurrentProject(project)\n// console.log(lista)\n// Storage.setToDoList(lista)\n// const lista2 = Storage.getToDoList()\n// console.log(lista2)\n// // Storage.changeCurrentProject('dzienki działa')\n// // const lista3 = Storage.getToDoList()\n// // //console.log(lista3)\n\n// Storage.renameTask(Storage.getCurrentProject().getName(), '3', 'tu git')\n\n// const lista4 = Storage.getToDoList()\n// console.log(lista4)\n\n_UI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeUI()\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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