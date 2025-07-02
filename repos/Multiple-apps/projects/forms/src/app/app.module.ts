import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadiobtnComponent } from './radiobtn/radiobtn.component';
import { SelectboxComponent } from './selectbox/selectbox.component';
import { TextboxComponent } from './textbox/textbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    RadiobtnComponent,
    SelectboxComponent,
    TextboxComponent
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
