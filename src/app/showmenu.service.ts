import { Injectable } from '@angular/core';

@Injectable()
export class ShowmenuService {

  visible: boolean;
  visible1: boolean;

  constructor() { }

  hide() { this.visible = true; };

  show() { this.visible = false; };
  
  hide1() { this.visible1 = true; };

  show1() { this.visible1 = false; };

}   
