import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-angular-listen-to-window',
  templateUrl: './angular-listen-to-window.component.html',
  styleUrls: ['./angular-listen-to-window.component.css']
})
export class AngularListenToWindowComponent implements OnInit {
  height: number;
  width: number;

constructor(){
  this.WindowResized();
}

  @HostListener('window:resize', ['$event'])
  WindowResized(event?) {
    //this.height = event.srcElement.innerHeight;
    this.height = window.innerHeight
    this.width = window.innerWidth;
  }
  ngOnInit() {
  }

}
