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
import { AngularStaggeredAnimationsComponent } from './angular-staggered-animations/angular-staggered-animations.component';
import { AngularStaggeredAnimations1Component } from './angular-staggered-animations1/angular-staggered-animations1.component';
import { AngularRoutesAnimationsComponent } from './angular-routes-animations/angular-routes-animations.component';
import { LeftComponent } from './angular-routes-animations/left/left.component';
import { CenterComponent } from './angular-routes-animations/center/center.component';
import { RightComponent } from './angular-routes-animations/right/right.component';
import { AngularListenToWindowComponent } from './angular-listen-to-window/angular-listen-to-window.component';
import { TemplateReferenceVariableInsideNgifComponent } from './template-reference-variable-inside-ngif/template-reference-variable-inside-ngif.component';

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
    NfElseComponent,
    AngularStaggeredAnimationsComponent,
    AngularStaggeredAnimations1Component,
    AngularRoutesAnimationsComponent,
    LeftComponent,
    CenterComponent,
    RightComponent,
    AngularListenToWindowComponent,
    TemplateReferenceVariableInsideNgifComponent
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
