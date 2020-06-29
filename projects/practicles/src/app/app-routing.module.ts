import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './invantory/add/add.component';
import { InvantoryComponent } from './invantory/invantory.component';


const routes: Routes = [
  { path: 'Add', component: AddComponent },
  { path: 'Home', component: InvantoryComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
