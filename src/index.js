import UI from './UI.js';

import Project from './Project'
import Task from './Task'
import toDoList from './ToDoList'
import Storage from './Storage'


const lista = new toDoList()

 const task1 = new Task('1', '10.10.2022', 'go out with dog', false)
 const task2 = new Task('2', '10.10.2022', 'go out with dog', false)
 const task3 = new Task('3', '10.10.2022', 'go out with dog', true)
 const task4 = new Task('4', '10.10.2022', 'go out with dog', false)

const newtask = new Task('Gym', '10.10.2022', 'workout time', true)

const tasks = [task1, task2, task3, task4, newtask]

const project = new Project('test', tasks)
const project2 = new Project('test2', tasks)


// lista.addProject(project)
// lista.addProject(project2)
// //console.log(lista)
// lista.setCurrentProject(project)
// lista.changeTaskName(lista.getCurrentProject().getName(), 'Gym', 'zadziała')
// console.log(lista)
// Storage.setToDoList(lista)
// Storage.renameProject('test', 'dzienki działa')
 const lista2 = Storage.getToDoList()
console.log(lista2)
// Storage.changeCurrentProject('dzienki działa')
// const lista3 = Storage.getToDoList()
// //console.log(lista3)

// //Storage.renameTask('dzienki działa', '3', 'tu git')
Storage.renameTask(Storage.getCurrentProject().getName(), 'zadziała', 'esssssa')

const lista4 = Storage.getToDoList()
console.log(lista4)


//UI.initializeUI()
