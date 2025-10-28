import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider-v1',
  templateUrl: './slider-v1.component.html',
  styleUrls: ['./slider-v1.component.css']
})
export class SliderV1Component implements OnInit {
  @ViewChild("widgetsContent", { read: ElementRef })
  public widgetsContent: ElementRef<any>;

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft + 150,
      behavior: "smooth"
    });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft - 150,
      behavior: "smooth"
    });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
