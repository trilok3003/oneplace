import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';
import { FirstOneComponent } from './first/first-one/first-one.component';


const routes: Routes = [
  {path: '', redirectTo: 'first', pathMatch: 'full'},
  {path: 'first', component: FirstComponent, children: [
    {path: 'first_one', component: FirstOneComponent, data: {title: 'title for first one component'}}
  ]},
  {path: 'second', component: SecondComponent},
  {path: 'home', component: HomeComponent, data : {title:'Title for Home Component'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
