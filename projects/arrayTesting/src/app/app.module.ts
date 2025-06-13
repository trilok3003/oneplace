import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Example1Component } from './example1/example1.component';
import { CardComponent } from './card/card.component';
import { Example2Component } from './example2/example2.component';

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    CardComponent,
    Example2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
