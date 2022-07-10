import Storage from './Storage';
import { drawTask, drawProject, getNewProject, getNewTask, getModifyTask } from './Utils';

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
        addProject.addEventListener('click', (e) =>{
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

        const addTask = document.querySelector('#open-addtask-modal')
        addTask.addEventListener('click', () =>{
            const addTaskModal = document.querySelector('#add-task-modal')
            addTaskModal.style.display = 'block'

            const addTaskButton = document.querySelector('#add-task')
            addTaskButton.addEventListener('click', () =>{
                const task = getNewTask()
                if(task === undefined){
                    return
                }
                Storage.addTask(Storage.getCurrentProject().getName(), task)
                Storage.currentProjectAddTask(task)
                UI.drawTasks()
                addTaskModal.style.display = 'none'
            })
        })

        const tasksTitles = document.querySelectorAll('.task__title')
        tasksTitles.forEach((taskTitle) =>{
            taskTitle.addEventListener('click', (e)=>{
                const selectedTitle = e.target.textContent
                const selectedTask = Storage.getCurrentProject().getTask(selectedTitle)
                console.log(selectedTask)
                
                const taskModal = document.querySelector('#modify-task-modal')
                taskModal.style.display = 'block'

                const modifyTask = document.querySelector('#modify-task')
                modifyTask.addEventListener('click', () =>{
                    const changedTask = getModifyTask()
                    if(changedTask === undefined){
                        return
                    }
                    Storage.modifyTask(selectedTask, changedTask)
                    UI.drawTasks()
                })

            })
        })
    }

}