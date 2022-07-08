import Project from "./Project"
import Task from "./Task"

export const drawTask = (inTask) => {
    const task = document.createElement('div')
    task.classList.add('task')

    const taskTitle = document.createElement('h3')
    taskTitle.classList.add('task__title')
    task.setAttribute('id', 'task-title')
    taskTitle.textContent = inTask.getTaskName()

    const taskDueDate = document.createElement('h4')
    taskDueDate.classList.add('task__duedate')
    taskDueDate.setAttribute('id', 'task-duedate')
    taskDueDate.textContent = inTask.getTaskDueDate()

    const taskDescription = document.createElement('p')
    taskDescription.classList.add('task__description')
    taskDescription.setAttribute('id', 'task-description')
    taskDescription.textContent = inTask.getTaskDescription()

    task.appendChild(taskTitle)
    task.appendChild(taskDueDate)
    task.appendChild(taskDescription)

    return task
}

export const drawProject = (inProject) => {
    const project = document.createElement('li')
    project.classList.add('main__nav__list__item')
    project.textContent = inProject.getName()

    return project
}

export const getNewProject = () => {
    const projectInput = document.querySelector('#add-project-input')
    const projectName = projectInput.value
    if(projectName === ''){
        return
    }
    const project = new Project(projectName)
    projectInput.value = ''

    return project
}

export const getNewTask = () => {
    const taskInput = document.querySelector('#add-task-taskname')
    const taskName = taskInput.value

    const taskDueDateInput = document.querySelector('#add-task-duedate')
    const taskDueDate = taskDueDateInput.value

    const taskDescriptionInput = document.querySelector('#add-task-description')
    const taskDescription = taskDescriptionInput.value

    const statusInput = document.querySelector('#add-task-status')
    const status = statusInput.value === 'important' ? true : false

    if(taskName === '' || taskDueDate === '' || taskDescription === ''){
        alert('Please fill in all fields')
    }else{
        const task = new Task(taskName, taskDueDate, taskDescription, status)

        taskInput.value = ''
        taskDueDateInput.value = ''
        taskDescriptionInput.value = ''
        statusInput.value = ''

        return task
    }
}

