import store from "../store.js"
let count = store.State.todos.length

export default class toDo{

  constructor(data){
    this.description = data.description
    this._id = data._id || data.id
    this.user = data.user 
    this.completed = data.completed 
    this.count = data.count || count
  }

 get todoTemplate(){
   let template = `
   <h5>${count}</h5>
   `
  if(this.completed){
    template +=  `
    <div>
    
    <h5>
    <input class="form-check-input" type="checkbox" onclick="app.todoController.toggleTodoStatus('${this._id}')" value="" id="defaultCheck1">
    
    <strike>${this.description}</strike>&nbsp;<button type="button" onclick="app.todoController.deleteToDo('${this._id}')" class="close text-danger" aria-label="Close">
    <span aria-hidden="true">&times;</span></h5>
    
    </div>
    `
  } else {
    template +=
   `
   <div>
   <h5>
   <input class="form-check-input" type="checkbox" onclick="app.todoController.toggleTodoStatus('${this._id}')" value="" id="defaultCheck1">
   
   ${this.description}&nbsp;<button type="button" onclick="app.todoController.deleteToDo('${this._id}')" class="close text-danger" aria-label="Close">
   <span aria-hidden="true">&times;</span></h5>
   
   </div>
   `
  }
   return template
 }

 get countTemplate (){
  let template = `
  {this.count}`
   return template
 }


}