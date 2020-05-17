import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeftComponent } from './angular-routes-animations/left/left.component';
import { CenterComponent } from './angular-routes-animations/center/center.component';
import { RightComponent } from './angular-routes-animations/right/right.component';


const routes: Routes = [
  { path: 'Left', component: LeftComponent },
  { path: 'Center', component: CenterComponent },
  { path: 'Right', component: RightComponent },
  { path: '', redirectTo: '/Left', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
