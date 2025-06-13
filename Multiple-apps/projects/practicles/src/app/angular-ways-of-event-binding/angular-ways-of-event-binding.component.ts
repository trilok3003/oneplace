import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild, Renderer, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-angular-ways-of-event-binding',
  templateUrl: './angular-ways-of-event-binding.component.html',
  styleUrls: ['./angular-ways-of-event-binding.component.css']
})
export class AngularWaysOfEventBindingComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('thirdElem') thirdElem: ElementRef;
  @ViewChild('secondElem') secondElem: ElementRef;
  @ViewChild('fourthElem') fourthElem: ElementRef;

  constructor(private _render: Renderer, private _renderer2: Renderer2) { }

  ngAfterViewInit() {
    this.secondElem.nativeElement.addEventListener('click', event => {
      this._render.setElementStyle(this.secondElem.nativeElement, 'border-color', 'red');
    });

    this._renderer2.listen(this.fourthElem.nativeElement, 'click', event => {
      this._renderer2.setStyle(this.fourthElem.nativeElement, 'border-color', 'red');
    })
  }

  AddRedBorder() {
    this._render.setElementStyle(this.thirdElem.nativeElement, 'border-color', 'red');
  }

  ngOnDestroy() {
    this.secondElem.nativeElement.removeEventListener('click', event => { });
  }
  ngOnInit() {
  }

}
