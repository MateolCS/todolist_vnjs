import Storage from './Storage';
import { drawTask, drawProject } from './Utils';

export default class UI{
    constructor(){}

    static initializeUI(){
        UI.drawTasks()
        UI.drawProjects()
        UI.addEvents()
    }

    static drawTasks(){
        const tasks = Storage.getCurrentProject().getTasks()
        const container = document.querySelector('.container')
        container.innerHTML = ''

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

    static addEvents(){
        const projects = document.querySelectorAll('.main__nav__list__item')
        projects.forEach((project) =>{
            project.addEventListener('click', (e) =>{
                //console.log(e.target.textContent)
                Storage.changeCurrentProject(e.target.textContent)
                UI.drawTasks()
            })
        })
    }
}