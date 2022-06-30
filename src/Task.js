export default class Task{
    name = ''
    dueDate = ''
    description =''
    status = false

    constructor(inName, inDueDate, inDescription, inStatus){
        this.name = inName
        this.dueDate = inDueDate
        this.description = inDescription
        this.status = inStatus
    }

    setTaskName(inTaskName){
        this.name = inTaskName
    }

    setDueDate(inDueDate){
        this.dueDate = inDueDate
    }

    setDescription(inDescription){
        this.description = inDescription
    }

    setStatus(inStatus){
        this.status = inStatus
    }

    getTaskName(){
        return this.name
    }

    getTaskDueDate(){
        return this.dueDate
    }

    getTaskDescription(){
        return this.description
    }

    getStatus(){
        return this.status
    }
}