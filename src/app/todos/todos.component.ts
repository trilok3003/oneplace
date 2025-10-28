import { Component, OnInit } from '@angular/core';
import {TodosService} from '../todos.service'
import {Todo} from '../models/todos.model'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  task;
  isDeleteTodo: boolean;
  todoId: string;
  isUpdateTodo: boolean;
  todo: Todo;
  searchTask;
  searchCompleted = '';
  tableFilterValue;
  tableFilterKey;
  constructor(public todosService: TodosService) {
   }

  ngOnInit(): void {
  this.getTodos();
  }
  getTodos() {
    this.todosService.getTodos().subscribe(res => {
      this.todos = res;
    })
  }
addTodo() {
  if(!this.task) {return}
  this.todosService.createTodo({task: this.task, completed: false}).subscribe(res => {
    this.task = null;
  this.getTodos();
  });
}
removeTodoByTask(task) {
  this.todosService.removeTodoByTask(task).subscribe(res => {
  this.getTodos();
  });
}
removeTodoById(id) {
  this.todosService.removeTodoById(id).subscribe(res => {
    this.todoId = null
    this.isDeleteTodo = false;
  this.getTodos();
  });
}
deleteTodo(task) {
  this.todosService.deleteTodo({task: task}).subscribe(res => {
  this.getTodos();
  });
}
updateTodo(todo: Todo) {
  todo.completed = this.getBoolean(todo.completed);
  this.todosService.updateTodo(todo).subscribe(res => {
    this.isUpdateTodo = false;
    this.todo = null;
  this.getTodos();
  });
}
onDeleteTodo(todoId) {
  if(!todoId) { return}
  this.todoId = todoId
  this.isDeleteTodo = true;
}
onUpdateTodo(todo) {
 this.todo = todo;
 this.isUpdateTodo = true;
}
 getBoolean(value){
  switch(value){
       case true:
       case "true":
       case 1:
       case "1":
       case "on":
       case "yes":
           return true;
       default: 
           return false;
   }
}
onSearchTodo() {
  this.tableFilterValue = this.searchTask;
  this.tableFilterKey = 'task'
  this.searchCompleted = '';
}
onFilterTodo() {
  this.tableFilterValue = this.searchCompleted;
  this.tableFilterKey = 'completed';
  this.searchTask = null;
}
}
