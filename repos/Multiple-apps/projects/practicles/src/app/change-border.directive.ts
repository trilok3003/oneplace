import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[changeColor]'
})
export class ChangeBorderDirective {
  constructor(private _elem: ElementRef, private _renderer: Renderer) { }

  @HostListener('click', ['$event']) changeBorderColor(event) {
    this._renderer.setElementStyle(this._elem.nativeElement, 'border-color', 'red');
    console.log(event);
  }

}
