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

    changeTaskName(taskName, newTaskName){
        this.currentProject.renameTask(taskName, newTaskName)
        this.projects.filter((project)=>{
            if(project.getName() === this.currentProject.getName()){
                project.renameTask(taskName, newTaskName)
            }
        })
    }

    changeTaskDescription(taskName, newDescription){
        this.currentProject.changeTaskDescription(taskName, newDescription)
        this.projects.filter((project)=>{
            if(project.getName() === this.currentProject.getName()){
                project.changeTaskDescription(taskName, newDescription)
            }
        })
    }

    changeTaskDueDate(taskName, newDueDate){
        this.currentProject.changeTaskDueDate(taskName, newDueDate)
        this.projects.filter((project)=>{
            if(project.getName() === this.currentProject.getName()){
                project.changeTaskDueDate(taskName, newDueDate)
            }
        })
    }

    changeTaskStatus(taskName, newStatus){
        this.currentProject.changeTaskStatus(taskName, newStatus)
        this.projects.filter((project)=>{
            if(project.getName() === this.currentProject.getName()){
                project.changeTaskStatus(taskName, newStatus)
            }
        })
    }

    deleteTask(taskName){
        this.currentProject.deleteTask(taskName)
        this.projects.filter((project)=>{
            if(project.getName() === this.currentProject.getName()){
                project.deleteTask(taskName)
            }
        })
    }

    addTask(inTask){
        this.currentProject.addTask(inTask)
        this.projects.filter((project)=>{
            if(project.getName() === this.currentProject.getName()){
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