import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressV1Component } from './progress-v1/progress-v1.component';
import { ProgressV2Component } from './progress-v2/progress-v2.component';
import { ProgressV3Component } from './progress-v3/progress-v3.component';
import { ProgressV4Component } from './progress-v4/progress-v4.component';
import { ProgressV5Component } from './progress-v5/progress-v5.component';
import { ProgressV6Component } from './progress-v6/progress-v6.component';



@NgModule({
  declarations: [ProgressV1Component, ProgressV2Component, ProgressV3Component, ProgressV4Component, ProgressV5Component, ProgressV6Component],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressV1Component, ProgressV2Component, ProgressV3Component, ProgressV4Component, ProgressV5Component, ProgressV6Component]
  
})
export class ProgressGraphModule { }
