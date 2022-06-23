class Project {
    name = ''
    tasks = []
    constructor({inName, inTasks}){
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

    setTasks(inTasks){
        this.tasks = inTasks
    }
}