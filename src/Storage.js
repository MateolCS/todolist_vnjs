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
            if(project.getTasks() === undefined){
                project.setTasks([])
            }
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

    static addTask(task){
        const toDoList = Storage.getToDoList()
        toDoList.addTask(task)
        Storage.setToDoList(toDoList)
    }

    static deleteTask(taskName){
        const toDoList = Storage.getToDoList()
        toDoList.deleteTask(taskName)
        Storage.setToDoList(toDoList)
    }

    static renameTask(taskName, newTaskName){
        const toDoList = Storage.getToDoList()
        toDoList.changeTaskName(taskName, newTaskName)
        Storage.setToDoList(toDoList)
    }

    static changeTaskDescription(taskName, newDescription){
        const toDoList = Storage.getToDoList()
        toDoList.changeTaskDescription(taskName, newDescription)
        Storage.setToDoList(toDoList)
    }

    static changeTaskDueDate(taskName, newDueDate){
        const toDoList = Storage.getToDoList()
        toDoList.changeTaskDueDate(taskName, newDueDate)
        Storage.setToDoList(toDoList)
    }

    static changeTaskStatus(taskName){
        const toDoList = Storage.getToDoList()
        toDoList.changeTaskStatus(taskName)
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

    static modifyTask(oldTask, newTask){
        const toDoList = Storage.getToDoList()
        if(oldTask.getTaskName() !== newTask.getTaskName() && newTask.getTaskName() !== ''){
            toDoList.changeTaskName(oldTask.getTaskName(), newTask.getTaskName())
        }

        if(oldTask.getTaskDescription() !== newTask.getTaskDescription() && newTask.getTaskDescription() !== ''){
            toDoList.changeTaskDescription(oldTask.getTaskName(), newTask.getTaskDescription())
        }

        if(oldTask.getTaskDueDate() !== newTask.getTaskDueDate() && newTask.getTaskDueDate() !== ''){
            toDoList.changeTaskDueDate(oldTask.getTaskName(), newTask.getTaskDueDate())
        }

        Storage.setToDoList(toDoList)
    }


}