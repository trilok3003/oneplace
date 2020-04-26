import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './tododetails.component.html',
  styleUrls: ['./tododetails.component.css']
})
export class TododetailsComponent implements OnInit {
  @Input() todo: Todo;
 
  constructor(private TodoService: TodoService) { }
 
  ngOnInit() {
  }
 
  updateActive(isActive: boolean) {
    this.TodoService
      .updateTodo(this.todo.key, { active: isActive })
      .catch(err => console.log(err));
  }
 
  deleteTodo() {
    this.TodoService
      .deleteTodo(this.todo.key)
      .catch(err => console.log(err));
  }
}
