import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularWaysOfEventBindingComponent } from './angular-ways-of-event-binding/angular-ways-of-event-binding.component';
import { ChangeBorderDirective } from './change-border.directive';
import { InvantoryComponent } from './invantory/invantory.component';
import { AddComponent } from './invantory/add/add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AngularWaysOfEventBindingComponent,
    ChangeBorderDirective,
    InvantoryComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
