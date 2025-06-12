import { NgModule } from '@angular/core';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { MatInputModule, MatButtonModule, MatProgressSpinnerModule} from '@angular/material';
import { MatMenuModule,  MatIconModule, MatCardModule, MatSidenavModule, MatListModule, MatSelectModule, MatGridListModule} from '@angular/material'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule, MatTabsModule, MatStepperModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  imports: [CommonModule ],
  
  
  exports:[ MatMenuModule,  MatIconModule, MatCardModule, MatSidenavModule,
            MatToolbarModule, MatTabsModule,  MatListModule, BrowserAnimationsModule, MatInputModule, 
            MatButtonModule,  MatSelectModule,MatGridListModule,MatStepperModule,MatProgressSpinnerModule,
            MatDialogModule,  MatExpansionModule,MatTooltipModule,MatTableModule,MatPaginatorModule,
            MatProgressBarModule,MatCheckboxModule,MatRadioModule]})
  
  export class MaterialModule{}
  
  
  