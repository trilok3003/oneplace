import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopUpComponent } from './pop-up/pop-up.component';
import { LoaderComponent } from './loader/loader.component';
import {HtpInterceptor} from './interceptor.service';
import { FilterByKeyPipe } from './pipes/filter-by-key.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    PopUpComponent,
    LoaderComponent,
    FilterByKeyPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    HtpInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
