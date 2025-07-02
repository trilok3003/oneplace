import { Component } from '@angular/core';
import { trigger, state,transition, style, animate ,keyframes, useAnimation} from '@angular/animations';
import { transAnimation } from './animation';
import { slideAnimation } from './slideAnimation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [
    
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => *', [
        animate('1s', keyframes ( [
          style({ opacity: 0.1,backgroundColor:'pink', offset: 0.1 }),
          style({ opacity: 0.6,backgroundColor:'orange', offset: 0.2 }),
          style({ opacity: 1,backgroundColor:'red',  offset: 0.5 }),
          style({ opacity: 0.2,backgroundColor:'blue', offset: 0.7 })
        ]))
      ])
    ]),
   
    trigger('openClose1', [
      transition('open => closed', [
        useAnimation(transAnimation, {
          params: {
            height: 0,
            opacity: 1,
            backgroundColor: 'red',
            time: '1s'
          }
        })
      ])
    ]),
    slideAnimation
  ]
  
})
export class AppComponent {
  title = 'angular-animation';
  isOpen = true;
 
  toggle() {
    this.isOpen = !this.isOpen;
  }
  currentIndex = 0;
  slides = [
    {image: 'assets/img00.jpg', description: 'Image 00'},
    {image: 'assets/img01.jpg', description: 'Image 01'},
    {image: 'assets/img02.jpg', description: 'Image 02'},
    {image: 'assets/img03.jpg', description: 'Image 03'},
    {image: 'assets/img04.jpg', description: 'Image 04'}
  ];

  constructor() {
    this.preloadImages();
  }

  preloadImages() {
    this.slides.forEach(slide => {
      (new Image()).src = slide.image;
    });
  }

  setCurrentSlideIndex(index) {
    this.currentIndex = index;
  }

  isCurrentSlideIndex(index) {
    return this.currentIndex === index;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex < this.slides.length - 1) ? ++this.currentIndex : 0;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.slides.length - 1;
  }
}
