import Project from './Project'

export default class toDoList{
    projects = []
    currentProject = null

    constructor(){
        this.projects = []
        this.projects.push(new Project('Default', []))
        this.currentProject = this.projects[0]
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

    changeTaskName(projectName, taskName, newTaskName){
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

    setCurrentProject(inProject){
        this.currentProject = inProject
    }

    getCurrentProject(){
        return this.currentProject
    }

    changeCurrentProject(newCurrentProjectName){
        this.currentProject = this.projects.find((project)=>{
            if(project.getName() === newCurrentProjectName){
                return project
            }
        })
    }

    currentProjectAddTask(inTask){
        this.currentProject.addTask(inTask)
    }


}