import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    SelectUnSelectAllComponent,
    AuctionStatusComponent,
    GenericPipeAcceptingComponent,
    GenericPipe,
    AngularPipeAsServiceComponent,
    GreetPipe,
    AngularCascadedDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [GreetPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
