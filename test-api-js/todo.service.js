class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }


    add_todo(todo){
        todo={
           "title": "T5",
           "description": "D5",
           "done":true 
        }
        console.log("Before adding: ",this.todos)
        this.todos.todo.push(todo)
        console.log("After adding: ",this.todos)
        return this.todos
    }

    delete_todo(id){
        console.log("Before deleting : ",this.todos)
        this.todos.todo.splice(3)
        console.log("After deleting : ",this.todos)
        return this.todos

    }

   update_todo(id, todo){
        // Your code here
        //todo={"title" : "T2", "description": "D2", "done":false}
        
         id=1
         console.log("Before update: ", this.todos.todo[id]);
         this.todos.todo[id].done = true;
         this.todos.todo[id].description = "D3";
         this.todos.todo[id].title = "T2"
         
         console.log("After update: ", this.todos.todo[id]);
         return this.todos

    }
}


module.exports= todoservice;