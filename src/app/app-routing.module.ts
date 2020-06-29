import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoDoneComponent } from './todo-done/todo-done.component';
import { TodoUndoneComponent } from './todo-undone/todo-undone.component';
import { AllComponent } from './all/all.component';


const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'todos', component: TodoListComponent },
  { path: 'add', component: CreateTodoComponent },
  { path: 'done', component: TodoDoneComponent },
  {path: 'undone', component: TodoUndoneComponent},
  {path: 'all', component: AllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
