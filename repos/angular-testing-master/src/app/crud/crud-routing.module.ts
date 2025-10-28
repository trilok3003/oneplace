import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // { path: 'crud', redirectTo: 'crud', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'details/:productId', component: DetailsComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update/:productId', component: UpdateComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
