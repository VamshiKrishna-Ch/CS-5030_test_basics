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
        //console.log("Before adding: ",this.todos)
        this.todos.todo.push(todo)
        console.log("After adding: ",this.todos)
        return this.todos
    }

    delete_todo(number){
        number=3
        console.log("Before deleting : ",this.todos)
        this.todos.todo.pop(todo => todo.id!=number)
        console.log("After deleting : ",this.todos)
        return this.todos

    }

   update_todo(number, todo){
        // Your code here
        //todo={"title" : "T2", "description": "D2", "done":false}
        
         number=1
         // update statement
         console.log("Before update: ", this.todos.todo[number]);
         
            this.todos.todo[number].done = true;
            this.todos.todo[number].description = "D3";
            this.todos.todo[number].title = "T2"
         
          
         console.log("After update: ", this.todos.todo[number]);
         return this.todos;
         
         

    }
}


module.exports= todoservice;