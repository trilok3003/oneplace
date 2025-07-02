import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { AuthGuard } from './authentication/auth.guard';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'todo', component: TodoComponent,canActivate:[AuthGuard]},
  {path: '', redirectTo:'login',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
