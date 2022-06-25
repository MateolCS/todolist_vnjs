import Task from './Task'
import Project from './Project'
import toDoList from './ToDoList'


export default class Storage{
  
    static setToDoList(inToDoList){
        localStorage.setItem('toDoList', JSON.stringify(inToDoList))
    }

    static getToDoList(){
        if(localStorage.getItem('toDoList') === null){
            const toDoList = new toDoList()
        }
        const toDoList = Object.assign(new toDoList(),JSON.parse(localStorage.getItem('toDoList')))

        toDoList.setProjects(toDoList.getProjects() = toDoList.projects.map((project) => Object.assign(new Project(), project)))

        toDoList.getProjects().forEach((project) =>{
            project.getTasks().map((task) => Object.assign(new Task(), task))
        })

        return toDoList
    }

    static addProject(project){
        const toDoList = Storage.getToDoList()
        toDoList.addProject(project)
        Storage.setToDoList(toDoList)
    }

    static deleteProject(projectName){
        const toDoList = Storage.getToDoList()
        toDoList.deleteProject(projectName)
    }



}