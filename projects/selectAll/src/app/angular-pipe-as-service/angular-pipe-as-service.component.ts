import { Component, OnInit } from '@angular/core';
import { GreetPipe } from './greet.pipe';

@Component({
  selector: 'app-angular-pipe-as-service',
  templateUrl: './angular-pipe-as-service.component.html',
  styleUrls: ['./angular-pipe-as-service.component.css']
})
export class AngularPipeAsServiceComponent implements OnInit {
  pipeInComponent: string = "Trilok. This is using the pipe in the component class"

  constructor( private _ps: GreetPipe) {
    this.pipeInComponent = this._ps.transform(this.pipeInComponent);
  }
  ngOnInit() {
  }

}
