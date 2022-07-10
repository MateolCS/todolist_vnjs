import Task from './Task'
import Project from './Project'
import toDoList from './ToDoList'

export default class Storage{
  
    static setToDoList(inToDoList){
        localStorage.setItem('toDoList', JSON.stringify(inToDoList))
    }

    static getToDoList(){
        const list = Object.assign(new toDoList(),JSON.parse(localStorage.getItem('toDoList')))

        list.setProjects(list.getProjects().map((project) => Object.assign(new Project(), project)))


        list.getProjects().forEach((project) =>{
            project.setTasks(project.getTasks().map((task) => Object.assign(new Task(), task)))
        })

        list.setCurrentProject(Object.assign(new Project(), list.getCurrentProject()))
        list.getCurrentProject().setTasks(list.getCurrentProject().getTasks().map((task) => Object.assign(new Task(), task)))

        return list
    }

    static addProject(project){
        const toDoList = Storage.getToDoList()
        toDoList.addProject(project)
        Storage.setToDoList(toDoList)
    }

    static deleteProject(projectName){
        const toDoList = Storage.getToDoList()
        toDoList.deleteProject(projectName)
        Storage.setToDoList(toDoList)
    }

    static renameProject(projectName, newProjectName){
        const toDoList = Storage.getToDoList()
        toDoList.renameProject(projectName, newProjectName)
        Storage.setToDoList(toDoList)
    }

    static addTask(projectName, task){
        const toDoList = Storage.getToDoList()
        toDoList.addTask(projectName, task)
        Storage.setToDoList(toDoList)
    }

    static deleteTask(projectName, taskName){
        const toDoList = Storage.getToDoList()
        toDoList.deleteTask(projectName, taskName)
        Storage.setToDoList(toDoList)
    }

    static renameTask(projectName, taskName, newTaskName){
        const toDoList = Storage.getToDoList()
        toDoList.changeTaskName(projectName, taskName, newTaskName)
        Storage.setToDoList(toDoList)
    }

    static changeTaskDescription(projectName, taskName, newDescription){
        const toDoList = Storage.getToDoList()
        toDoList.changeTaskDescription(projectName, taskName, newDescription)
        Storage.setToDoList(toDoList)
    }

    static changeTaskDueDate(projectName, taskName, newDueDate){
        const toDoList = Storage.getToDoList()
        toDoList.changeTaskDueDate(projectName, taskName, newDueDate)
        Storage.setToDoList(toDoList)
    }

    static changeTaskStatus(projectName, taskName, newStatus){
        const toDoList = Storage.getToDoList()
        toDoList.changeTaskStatus(projectName, taskName, newStatus)
        Storage.setToDoList(toDoList)
    }

    static changeCurrentProject(newCurrentProjectName){
        const toDoList = Storage.getToDoList()
        toDoList.changeCurrentProject(newCurrentProjectName)
        Storage.setToDoList(toDoList)
    }

    static getCurrentProject(){
        const toDoList = Storage.getToDoList()
        return toDoList.getCurrentProject()
    }

    static currentProjectAddTask(task){
        const toDoList = Storage.getToDoList()
        toDoList.currentProjectAddTask(task)
        toDoList.addTask(toDoList.getCurrentProject().getName(), task)
        Storage.setToDoList(toDoList)
    }


}