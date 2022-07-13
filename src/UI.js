import Storage from './Storage';
import { drawTask, drawProject, getNewProject, getNewTask, getModifyTask } from './Utils';

export default class UI{
    constructor(){}

    static initializeUI(){
        UI.drawTasks()
        UI.drawProjects()
        UI.addEvents()
        UI.taskTitles()
        UI.tasksStatus()
    }

    static drawTasks(){
        const tasks = Storage.getCurrentProject().getTasks()
        const container = document.querySelector('.container')
        container.innerHTML = ''

        tasks.map((task) =>{
            container.appendChild(drawTask(task))
        })
        UI.taskTitles()
    }

    static drawProjects(){
        const projects = Storage.getToDoList().getProjects()
        const container = document.querySelector('#projects')
        container.innerHTML = ''
        projects.map((project) =>{
            container.appendChild(drawProject(project))
        })
        UI.projectSwap()

    }

    static addEvents(){
        const addProject = document.querySelector('#add-project')
        addProject.addEventListener('click', (e) =>{
            const addProjectModal = document.querySelector('#project-modal')
            addProjectModal.style.display = 'block'

            const addProjectButton = document.querySelector('#add-project-button')
            addProjectButton.addEventListener('click', () =>{
                const project = getNewProject()
                Storage.addProject(project)
                UI.drawProjects()
                addProjectModal.style.display = 'none'
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
                Storage.addTask(task)
                UI.drawTasks()
                addTaskModal.style.display = 'none'
            })
        })

        
    }

    static projectSwap(){
        const projects = document.querySelectorAll('.main__nav__list__item')
        projects.forEach((project) =>{
            project.addEventListener('click', (e) =>{
                Storage.changeCurrentProject(e.target.textContent)
                UI.drawTasks()
                UI.projectTitles()
            })
        })
    }

    static taskTitles(){
        const tasksTitles = document.querySelectorAll('.task__title')
        tasksTitles.forEach((taskTitle) =>{
            taskTitle.addEventListener('click', (e)=>{
                let selectedTitle = e.target.textContent
                let selectedTask = Storage.getCurrentProject().getTask(selectedTitle)
                const taskModal = document.querySelector('#modify-task-modal')
                taskModal.style.display = 'block'

                const modifyTask = document.querySelector('#modify-task')
                modifyTask.addEventListener('click', () =>{
                    const changedTask = getModifyTask()
                    if(changedTask === undefined){
                        return
                    }
                    Storage.modifyTask(selectedTask, changedTask)
                    document.location.reload(true)
                    taskModal.style.display = 'none'
                })
            })
        })

    }

    static tasksStatus(){
        const tasks = document.querySelectorAll('.task')
        tasks.forEach((task) =>{
            task.addEventListener('dblclick', (e) =>{
                const taskTitle = task.firstChild.textContent
                Storage.changeTaskStatus(taskTitle)
                UI.drawTasks()
                UI.tasksStatus()
            })
        })
    }

}