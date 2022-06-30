import Project from './Project'
import Task from './Task'

export default class toDoList{
    projects = []

    constructor(){
        this.projects = []
        this.projects.push(new Project('Default', []))
    }

    addProject(inProject){
        this.projects.push(inProject)
    }

    deleteProject(delProjectName){
        this.projects.filter((project) => project.name === delProjectName)
    }

    renameProject(projectName, newProjectName){
        this.projects.filter((project)=>{
            if(project.getName() === projectName){
                project.setName(newProjectName)
            }
        })
    }
    
    getProjects(){
        return this.projects
    }

    setProjects(inProjects){
        this.projects = inProjects
    }

    renameTask(projectName, taskName, newTaskName){
        this.projects.filter((project)=>{
            if(project.getName() === projectName){
                project.renameTask(taskName, newTaskName)
            }
        })
    }

    changeTaskDescription(projectName, taskName, newDescription){
        this.projects.filter((project)=>{
            if(project.getName() === projectName){
                project.changeTaskDescription(taskName, newDescription)
            }
        })
    }

    changeTaskDueDate(projectName, taskName, newDueDate){
        this.projects.filter((project)=>{
            if(project.getName() === projectName){
                project.changeTaskDueDate(taskName, newDueDate)
            }
        })
    }

    changeTaskStatus(projectName, taskName, newStatus){
        this.projects.filter((project)=>{
            if(project.getName() === projectName){
                project.changeTaskStatus(taskName, newStatus)
            }
        })
    }

    deleteTask(projectName, taskName){
        this.projects.filter((project)=>{
            if(project.getName() === projectName){
                project.deleteTask(taskName)
            }
        })
    }

    addTask(projectName, inTask){
        this.projects.filter((project)=>{
            if(project.getName() === projectName){
                project.addTask(inTask)
            }
        })
    }
}