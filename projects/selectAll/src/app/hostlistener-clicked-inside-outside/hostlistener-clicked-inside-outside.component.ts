import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hostlistener-clicked-inside-outside',
  templateUrl: './hostlistener-clicked-inside-outside.component.html',
  styleUrls: ['./hostlistener-clicked-inside-outside.component.css']
})
export class HostlistenerClickedInsideOutsideComponent implements OnInit {
  clicked: string = '';

  constructor(private elem: ElementRef) { }

  @HostListener('document:click', ['$event'])
  DocumentClick(event: Event) {
    if (this.elem.nativeElement.contains(event.target))
      this.clicked = "inside";
    else
      this.clicked = "outside";
  }
  ngOnInit() {
  }

}
