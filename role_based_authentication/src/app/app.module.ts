
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RoutingModule, routingComponent } from './routing.module';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from './material.module'; 

import { AuthenticationGuard } from './authentication/authentication.guard';
import { AuthenticationService } from './authentication/authentication.service';
import { ShowmenuService } from './showmenu.service';  

import { AppComponent } from './app.component';
import { HomeComponent } from './application/home/home.component';
import { MyformComponent } from './Login/myform/myform.component';
import { AddUsersComponent } from './application/UserManagement/add-users/add-users.component';
import { AdminComponent } from './admin/admin.component';
import { AdminActivityComponent } from './application/AdminAccess/admin-activity/admin-activity.component';




@NgModule({

  declarations: [
              AppComponent, routingComponent,  
    
              HomeComponent, MyformComponent, AddUsersComponent, AdminComponent, AdminActivityComponent
                ],

  imports: [BrowserModule,  RoutingModule,   
            FormsModule,ReactiveFormsModule, 
            FlexLayoutModule
            ],

  entryComponents:[  ],

  providers: [ShowmenuService,AuthenticationService, AuthenticationGuard],

  bootstrap: [AppComponent]

})

export class AppModule { }
