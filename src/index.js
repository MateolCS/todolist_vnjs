import Project from './Project'
import Task from './Task'
import toDoList from './ToDoList'


const lista = new toDoList()

 const task1 = new Task('1', '10.10.2022', 'go out with dog', 1)
 const task2 = new Task('2', '10.10.2022', 'go out with dog', 1)
 const task3 = new Task('3', '10.10.2022', 'go out with dog', 1)
 const task4 = new Task('4', '10.10.2022', 'go out with dog', 1)

const newtask = new Task('Gym', '10.10.2022', 'workout time', 1)

const tasks = [task1, task2, task3, task4, newtask]

const project = new Project('test', tasks)

console.log(lista)
lista.addProject(project)
console.log(lista)
lista.renameTask('test', '1', 'dzienki działa')
console.log(lista)