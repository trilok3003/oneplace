import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { SortingComponent } from './sorting/sorting.component';
import { TransferingComponent } from './transfering/transfering.component';
import { TransferingGroupComponent } from './transfering-group/transfering-group.component';
import { CustomizingPreviewComponent } from './customizing-preview/customizing-preview.component';
import { CustomizingPlaceholderComponent } from './customizing-placeholder/customizing-placeholder.component';
import { SortingHorizontalComponent } from './sorting-horizontal/sorting-horizontal.component';
import { RestrictBoundaryComponent } from './restrict-boundary/restrict-boundary.component';
import { RestrictAxisComponent } from './restrict-axis/restrict-axis.component';
import { RestrictPredicateComponent } from './restrict-predicate/restrict-predicate.component';
import { DisabledDraggingComponent } from './disabled-dragging/disabled-dragging.component';
import { DisabledSortingComponent } from './disabled-sorting/disabled-sorting.component';
@NgModule({
  declarations: [
    AppComponent,
    SortingComponent,
    TransferingComponent,
    TransferingGroupComponent,
    CustomizingPreviewComponent,
    CustomizingPlaceholderComponent,
    SortingHorizontalComponent,
    RestrictBoundaryComponent,
    RestrictAxisComponent,
    RestrictPredicateComponent,
    DisabledDraggingComponent,
    DisabledSortingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
