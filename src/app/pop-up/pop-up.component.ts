import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        // transform: 'scale(1)'
        // transform: 'translate(0,0)'

      })),
      state('closed', style({
        // transform: 'scale(1.5)'
        // transform: 'translate(0,-25%)'
        // transform: 'translateX(-100%)' 

      })),
      transition('open => closed', [
        // animate('1s')
        // transform .3s ease-out
        animate('0.5s 300ms ease-in')
      ]),
      transition('closed => open', [
        // animate('0.5s')
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ]),
    ]),
  ],
})
export class PopUpComponent implements OnInit {
  width = 50;
  center: boolean;
  isOpen: boolean;
  @Input('width') set setWidth(value) {
    this.width = value
  }
  @Input('center') set setCenter(value) {
    this.center = !!value
  }
  @Input('isOpen') set setisOpen(value) {
    this.isOpen = !!value
  }
  constructor() { }

  ngOnInit(): void {
  }

}
