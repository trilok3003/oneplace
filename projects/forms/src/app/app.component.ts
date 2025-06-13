import { Component,ViewChild,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  model: any = {};

  stateData: any[] = ['India', 'US', 'UK'];
   // model: any = {};
 
   // @ViewChild('f') public userFrm: NgForm;
  
   // showFrm(): void{
      
   //  }
 
   onSubmit() {
     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
   }
}
