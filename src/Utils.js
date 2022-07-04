
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

