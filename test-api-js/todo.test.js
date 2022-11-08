

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    // Write all your test cases here that corresponds to software requirements
    test("add_todo(todo) ", ()=>{
        expect(todo_service.add_todo().todo[3]).toEqual({
        "title": "T5","description": "D5","done":true})
          
    })

    test("delete_todo(id) ", () =>{
        expect(todo_service.delete_todo().todo.length).toEqual(3)
    })
 
    test("update_todo(id, todo) ", () =>{
       expect(todo_service.update_todo().todo[1]).toEqual({
       "title": "T2","description": "D3","done":true})
   })


});