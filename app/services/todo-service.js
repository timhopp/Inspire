import store from "../store.js";
import toDo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/tim/todos/",
  timeout: 8000
});

class TodoService {

  constructor(){
    this.getTodos()
  }
  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get('').then(res =>{
      let toDos = res.data.data.map(todo => new toDo(todo))
      store.commit("todos", toDos)
    });
    //TODO Handle this response from the server
  }

  addTodoAsync(todo) {
    todoApi.post("", todo).then(res => {
      console.log('worked', res);
      this.getTodos()
      console.log(store.State.count)
    });
   
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    todo.completed = !todo.completed;
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi.put('' + todoId, todo).then(res => {
      let todos = store.State.todos.map(to => {
        if(to._id == todoId){
          console.log(res.data)
          return new toDo(todo) 
        } else {
          return new toDo(to)
        }
      })
       store.commit('todos', todos)
       console.log(res.data)
    })
    
   
    
    
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
    todoApi.delete(''+ todoId).then(res => {
      console.log(res)
      store.commit('todos', store.State.todos.filter(to => to._id != todoId))
    })
  }
}

const todoService = new TodoService();
export default todoService;
