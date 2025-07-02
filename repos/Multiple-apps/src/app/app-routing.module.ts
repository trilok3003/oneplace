import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TresSharedModule } from 'projects/trees/src/app/app.module';


const routes: Routes = [
  {path: 'trees',  loadChildren: '../../projects/trees/src/app/app.module#TresSharedModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TresSharedModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
