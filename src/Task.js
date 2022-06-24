export default class Task{
    name = ''
    dueDate = ''
    description =''
    priority = 1

    constructor({inName, inDueDate, inDescription, inPriority}){
        this.name = inName
        this.dueDate = inDueDate
        this.description = inDescription
        this.priority = inPriority
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

    setPriority(inPriority){
        this.priority = inPriority
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

    getPriority(){
        return this.priority
    }
}