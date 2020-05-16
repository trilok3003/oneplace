import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SelectUnSelectAllComponent } from './select-un-select-all/select-un-select-all.component';
import { AuctionStatusComponent } from './auction-status/auction-status.component';
import { GenericPipeAcceptingComponent } from './generic-pipe-accepting/generic-pipe-accepting.component';
import { GenericPipe } from './generic-pipe-accepting/generic.pipe';
import { AngularPipeAsServiceComponent } from './angular-pipe-as-service/angular-pipe-as-service.component';
import { GreetPipe } from './angular-pipe-as-service/greet.pipe';
import { AngularCascadedDropdownComponent } from './angular-cascaded-dropdown/angular-cascaded-dropdown.component';
import { ToggleOptionsComponent } from './toggle-options/toggle-options.component';
import { HostlistenerClickedInsideOutsideComponent } from './hostlistener-clicked-inside-outside/hostlistener-clicked-inside-outside.component';
import { HostlistenerAsDirectiveComponent } from './hostlistener-as-directive/hostlistener-as-directive.component';
import { CustomElementDirective } from './hostlistener-as-directive/custom-element.directive';
import { NavigationScrollintoviewSmoothComponent } from './navigation-scrollintoview-smooth/navigation-scrollintoview-smooth.component';
import { HostlistenerDocumentKeyupEventComponent } from './hostlistener-document-keyup-event/hostlistener-document-keyup-event.component';
import { AngularChangeDetectionStrategyAndRefComponent } from './angular-change-detection-strategy-and-ref/angular-change-detection-strategy-and-ref.component';
import { ChildComponent } from './angular-change-detection-strategy-and-ref/child/child.component';
import { AngularGridSortingComponent } from './angular-grid-sorting/angular-grid-sorting.component';
import { NfElseComponent } from './nf-else/nf-else.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectUnSelectAllComponent,
    AuctionStatusComponent,
    GenericPipeAcceptingComponent,
    GenericPipe,
    AngularPipeAsServiceComponent,
    GreetPipe,
    AngularCascadedDropdownComponent,
    ToggleOptionsComponent,
    HostlistenerClickedInsideOutsideComponent,
    HostlistenerAsDirectiveComponent,
    CustomElementDirective,
    NavigationScrollintoviewSmoothComponent,
    HostlistenerDocumentKeyupEventComponent,
    AngularChangeDetectionStrategyAndRefComponent,
    ChildComponent,
    AngularGridSortingComponent,
    NfElseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [GreetPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
