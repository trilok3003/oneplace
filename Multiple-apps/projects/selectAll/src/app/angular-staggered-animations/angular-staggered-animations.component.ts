import { Component, OnInit } from '@angular/core';
import { trigger, stagger, transition, animate, style, group, query } from '@angular/animations'
@Component({
  selector: 'app-angular-staggered-animations',
  templateUrl: './angular-staggered-animations.component.html',
  styleUrls: ['./angular-staggered-animations.component.css'],
  animations: [
    trigger('animate', [
      transition(':enter', [
        group([
          query('h3', [
            style({ opacity: 0, transform: 'translateY(-10px)' }),
            animate(500)
          ]),
          query('.item', [
            style({ opacity: 0, transform: 'translateX(-30px)' }),
            stagger(200, [
              animate(500)
            ])
          ])
        ])
      ]),
      transition(':leave', [
        group([
          query('h3', [
            animate(500, style({ opacity: 0, transform: 'translateY(-10px)' }))
          ]),
          query('.item', [
            style({ opacity: 1, transform: 'translateX(0px)' }),

            animate(500, style({ opacity: 0, transform: 'translateX(-30px)' }))

          ])
        ])
      ])
    ])
  ]
})
export class AngularStaggeredAnimationsComponent implements OnInit {
  items: string[] = ['Item One', 'Item Two', 'Item Three'];
  textboxValue: string;
  AddListItem(): void {
    this.items.unshift(this.textboxValue);
  }
  RemoveItem(item: string): void {
    this.items.splice(this.items.indexOf(item), 1);
  }
  constructor() { }

  ngOnInit() {
  }

}
