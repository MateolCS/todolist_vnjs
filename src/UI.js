import Storage from './Storage';
import { drawTask, drawProject, getNewProject } from './Utils';

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

        const addProject = document.querySelector('#add-project')
        addProject.addEventListener('click', () =>{
            const addProjectModal = document.querySelector('#project-modal')
            addProjectModal.style.display = 'block'

            const addProjectButton = document.querySelector('#add-project-button')
            addProjectButton.addEventListener('click', () =>{
                const project = getNewProject()
                console.log(project)
                 Storage.addProject(project)
                 console.log(Storage.getToDoList())
                // UI.drawProjects()
                // addProjectModal.style.display = 'none'
            })
        })
    }
}