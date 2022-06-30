export default class Project {
    name = ''
    tasks = []
    constructor(inName, inTasks){
        this.name = inName
        this.tasks = inTasks
    }

    setName(inName){
        this.name = inName
    }

    getName(){
        return this.name
    }

    getTasks(){
        return this.tasks
    }

    getTask(taskName){
        return this.tasks.find((task) => task.name === taskName)
    }

    setTasks(inTasks){
        this.tasks = inTasks
    }

    addTask(inTask){
        this.tasks.push(inTask)
    }

    deleteTask(delTaskName){
        this.tasks = this.tasks.filter((task) => task.name !== delTaskName)
    }

    renameTask(taskName, newTaskName){
        this.tasks.filter((task) => {
            if(task.getTaskName() === taskName){
                task.setTaskName(newTaskName)
            }
        })
    }

    changeTaskDescription(taskName, newDescription){
        this.tasks.filter((task) => {
            if(task.getTaskName() === taskName){
                task.setDescription(newDescription)
            }
        })
    }

    changeTaskDueDate(taskName, newDueDate){
        this.tasks.filter((task) => {
            if(task.getTaskName() === taskName){
                task.setDueDate(newDueDate)
            }
        })
    }

    changeTaskStatus(taskName, newStatus){
        this.tasks.filter((task) =>{
            if(task.getTaskName() === taskName){
                task.setStatus(newStatus)
            }
        })
    }


}