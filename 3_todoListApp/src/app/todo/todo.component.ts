import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
   todoListArray:any[];
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodoList().snapshotChanges().subscribe(item=>{
      this.todoListArray=[];
      item.forEach(element=>{
        var x=element.payload.toJSON();
        x["$key"]=element.key;
        this.todoListArray.push(x);
      });
      //sort array is checked false..> true
      this.todoListArray.sort((a,b)=>{
        return a.isChecked - b.isChecked;
      });
    });
  }
  onAdd(itemTitle){
   this.todoService.addTitle(itemTitle.value);
   itemTitle.value= null;
  }
  alterCheck($key:string,isChecked){
    this.todoService.checkOrUnCheckTitle($key,!isChecked);
  }
  onDelete($key)
  {
   this.todoService.removeTitle($key);
  }
}
