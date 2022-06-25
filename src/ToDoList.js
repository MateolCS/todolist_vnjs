import Project from './Project'

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
}