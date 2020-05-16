import { Component, OnInit, HostListener } from '@angular/core';
export enum KeyCodes {
  LEFT = 37,
  RIGHT = 39
}
@Component({
  selector: 'app-hostlistener-document-keyup-event',
  templateUrl: './hostlistener-document-keyup-event.component.html',
  styleUrls: ['./hostlistener-document-keyup-event.component.css']
})
export class HostlistenerDocumentKeyupEventComponent implements OnInit {
  counter: number = 0;
  fragment: string;
  classBorder: string = '';

  constructor() {
  }

  @HostListener('document:keyup', ['$event'])
  KeyUpEvent(event: KeyboardEvent) {
    if (event.keyCode == KeyCodes.LEFT)
      this.counter--;
    if (event.keyCode == KeyCodes.RIGHT)
      this.counter++;
  }

  @HostListener('mouseover', ['$event']) 
  hover(){
    this.classBorder = 'border'
  }

  @HostListener('mouseleave', ['$event']) 
  leave(){
    this.classBorder = '';
  }
  ngOnInit() {
  }

}
