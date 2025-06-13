import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable-inside-ngif',
  templateUrl: './template-reference-variable-inside-ngif.component.html',
  styleUrls: ['./template-reference-variable-inside-ngif.component.css']
})
export class TemplateReferenceVariableInsideNgifComponent implements OnInit {
  show: boolean = false;
  private spnRed: ElementRef;
  @ViewChild('spnRed', {static: false})
  get SpnRed(): ElementRef {
    return this.spnRed;
  }
  set SpnRed(elem: ElementRef) {
    this.spnRed = elem;
    if(this.spnRed)
      this.spnRed.nativeElement.className = 'red'
  }

  ShowButton() : void {
    this.show = !this.show;
    if(this.show) {
      
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
