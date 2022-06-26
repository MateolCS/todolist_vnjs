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

    changeTaskPriority(projectName, taskName, newPriority){
        this.projects.filter((project)=>{
            if(project.getName() === projectName){
                project.changeTaskPriority(taskName, newPriority)
            }
        })
    }
}