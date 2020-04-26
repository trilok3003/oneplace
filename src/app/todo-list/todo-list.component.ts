import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { map } from 'rxjs/operators';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any;
 
  constructor(private TodoService: TodoService) { }
 
  ngOnInit() {
    this.getTodosList();
  }
 
  getTodosList() {
    this.TodoService.getTodosList().subscribe(data => {
      this.todos = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Todo;
      })
    });
    // this.TodoService.getTodosList()
    // .pipe(
    //   map(changes =>
    //     changes.map(c =>
    //       ({ key: c.payload.key, ...c.payload.val() })
    //     )
    //   )
    // )
    // .subscribe(Todos => {
    //   console.log(Todos)
    //   this.todos = Todos;
    // });
  }
 
  deletetodos() {
    this.TodoService.deleteAll();
  }
 
}
