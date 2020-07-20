import TodoService from "../services/todo-service.js";
import store from "../store.js";
import todoService from "../services/todo-service.js";

function _drawCount(){
document.getElementById('count').innerHTML = `<div><h5>To-Do: ${store.State.todos.length}</div>`
}
//TODO Create the render function
function _drawTodos() {
  let template = ''
  console.log('draw todo ran')
  let todos = store.State.todos
  todos.forEach(todo => template += todo.todoTemplate)
  document.getElementById('todos').innerHTML = template
  _drawCount()
}

// function _drawCount(){
//   let template = ''
//   console.log('draw todo ran')
//   let todos = store.State.todos
//   todos.forEach(todo => template += todo.countTemplate)
//   document.getElementById('count').innerHTML = template

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    store.subscribe('todos', _drawTodos)
    // store.subscribe('todos', _drawCount)
  }

  addTodo(event) {
    event.preventDefault();
    var form = event.target;
    var todo = {
      //TODO build the todo object from the data that comes into this method
      description: form.todo.value,
    };
    TodoService.addTodoAsync(todo);
    console.log(store.State.todos)
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  deleteToDo(todoId) {
    console.log('works')
    TodoService.removeTodoAsync(todoId);
  }
}
