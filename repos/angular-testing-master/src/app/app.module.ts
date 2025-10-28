import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeadingComponent } from './heading/heading.component';
import { ExpanderComponent } from './expander/expander.component';
import { ClockComponent } from './clock/clock.component';
import { ProgressGraphModule } from './progress-graph/progress-graph.module';
import { LayoutComponent } from './layout/layout.component';
import { ProgressExampleComponent } from './progress-example/progress-example.component';
import { ContentProjectionExComponent } from './content-projection-ex/content-projection-ex.component';
import { ScrollbarStylingComponent } from './components/scrollbar-styling/scrollbar-styling.component';
import { SliderV1Component } from './components/slider-v1/slider-v1.component';
import { ContentProjectedComponent } from './components/content-projected/content-projected.component';
import { ContentProjectedMainComponent } from './components/content-projected/content-projected-main/content-projected-main.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchingPaginationTableComponent } from './components/searching-pagination-table/searching-pagination-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    ExpanderComponent,
    ClockComponent,
    LayoutComponent,
    ProgressExampleComponent,
    ContentProjectionExComponent,
    ScrollbarStylingComponent,
    SliderV1Component,
    ContentProjectedComponent,
    ContentProjectedMainComponent,
    SearchingPaginationTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ProgressGraphModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
