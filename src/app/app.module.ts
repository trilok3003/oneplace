import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { DummyComponent } from './dummy/dummy.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TododetailsComponent } from './tododetails/tododetails.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosComponent } from './todos/todos.component';
import { TodoDoneComponent } from './todo-done/todo-done.component';
import { TodoUndoneComponent } from './todo-undone/todo-undone.component';
import { AllComponent } from './all/all.component';
@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    CreateTodoComponent,
    TododetailsComponent,
    TodoListComponent,
    TodosComponent,
    TodoDoneComponent,
    TodoUndoneComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // Only required for database features
// AngularFireAuthModule, // Only required for auth features,
// AngularFireStorageModule // Only required for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
