import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './application/home/home.component';
import { AddUsersComponent } from './application/UserManagement/add-users/add-users.component';
import { MyformComponent } from './Login/myform/myform.component';
import { AdminComponent } from './admin/admin.component';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { AdminActivityComponent } from './application/AdminAccess/admin-activity/admin-activity.component';



const routes: Routes = [  {path:'Login/myform',component: MyformComponent},

                          {path:'Admin',component: AdminComponent,canActivate: [AuthenticationGuard]},
                          
 						              {path:'application/home',component: HomeComponent},
                          {path:'application/UserManagement/add-users',component: AddUsersComponent},
                          
                          {path:'application/AdminAccess/admin-activity',component: AdminActivityComponent}
 						           ];
                        
                        


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports:[RouterModule]
  })

export class RoutingModule{}

export const routingComponent = [ MyformComponent, HomeComponent]


  

