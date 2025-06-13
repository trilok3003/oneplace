import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appCustomElement]'
})
export class CustomElementDirective {

  constructor(private _elem: ElementRef, private _renderer: Renderer) { }

  @HostListener('click')
  click() {
    this._renderer.setElementStyle(this._elem.nativeElement, 'color', 'red');
  }
}
