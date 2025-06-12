import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ShowmenuService} from '../showmenu.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public showmenu:ShowmenuService, private _activateroute: ActivatedRoute ) { }

  ngOnInit(){
              this.showmenu.show();
              this.showmenu.hide1();
            } 


}
