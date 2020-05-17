import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, animation, style, state, keyframes } from '@angular/animations';
@Component({
  selector: 'app-angular-staggered-animations1',
  templateUrl: './angular-staggered-animations1.component.html',
  styleUrls: ['./angular-staggered-animations1.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({
          opacity: 0,
          marginTop: '-10px'
        }),
        animate(400)
      ]),
      transition(':leave',[
        animate(500, keyframes([
          style({
            offset:0.5,
            marginLeft:'10px',
            opacity:1
          }),
          style({
            offset:1,
            marginLeft:'-100%',
            opacity:0
          })
        ]))
      ])
    ])
  ]
})
export class AngularStaggeredAnimations1Component implements OnInit {
  options: string[] = [
    'trilok',
    'sonu',
    'monu'
  ];

  optionVal: string;

  AddOption() {
    this.options.push(this.optionVal);
  }

  RemoveOption(optionVal: string) {
    this.options = this.options.filter(val => {
      return val != optionVal;
    })
  }
  constructor() { }

  ngOnInit() {
  }

}
