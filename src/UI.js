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
        UI.deleteTask()
        UI.deleteProject()
        UI.projectHover()
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
                const toDoList = Storage.getToDoList()
                if(toDoList.projectExists(project.getName())){
                    alert('Project already exists')
                    addProjectModal.style.display = 'none'
                }else{
                    Storage.addProject(project)
                    UI.drawProjects()
                    UI.projectSwap()
                    UI.deleteProject()
                    UI.projectHover()
                    addProjectModal.style.display = 'none'
                }
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
                UI.taskTitles()
                UI.tasksStatus()
                UI.deleteTask()
                UI.projectHover()
                UI.deleteProject()
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

    static deleteTask(){
        const deleteButtons = document.querySelectorAll('.task__delete')
        deleteButtons.forEach((deleteButton) =>{
            deleteButton.addEventListener('click', (e) =>{
                const taskTitle = e.target.parentNode.firstChild.nextSibling.textContent
                Storage.deleteTask(taskTitle)
                UI.drawTasks()
                UI.tasksStatus()
            })
        })
    }

    static deleteProject(){
        const deleteButtons = document.querySelectorAll('.project__delete')
        deleteButtons.forEach((deleteButton) =>{
            deleteButton.addEventListener('click', (e) =>{
                const projectName = e.target.parentNode.textContent
                Storage.deleteProject(projectName)
                UI.drawProjects()
                UI.projectSwap()
                UI.deleteProject()
                UI.projectHover()
            })
        })
    }

    static projectHover(){
        const projects = document.querySelectorAll('.main__nav__list__item')
        projects.forEach((project) =>{
            project.addEventListener('mouseenter', (e) =>{
                const selectedProject = e.target.firstChild.nextSibling
                selectedProject.classList.add('visible')
            })

            project.addEventListener('mouseleave', (e) =>{
                const selectedProject = e.target.firstChild.nextSibling
                selectedProject.classList.remove('visible')
            })
        })
    }

}