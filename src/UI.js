import Storage from './Storage';
import { drawTask, drawProject } from './Utils';

export default class UI{
    constructor(){}

    static initializeUI(){
        UI.drawTasks()
        UI.drawProjects()
    }

    static drawTasks(){
        const tasks = Storage.getCurrentProject().getTasks()
        const container = document.querySelector('.container')

        tasks.map((task) =>{
            container.appendChild(drawTask(task))
        })
    }

    static drawProjects(){
        const projects = Storage.getToDoList().getProjects()
        const container = document.querySelector('#projects')

        projects.map((project) =>{
            container.appendChild(drawProject(project))
        })
    }
}