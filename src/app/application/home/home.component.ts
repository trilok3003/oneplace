import { Component, OnInit  } from '@angular/core';
 
import { ActivatedRoute, Params } from '@angular/router'; 
import {ShowmenuService} from '../../showmenu.service'; 
import { AuthenticationService } from '../../authentication/authentication.service'; 


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
     
 constructor(public showmenu:ShowmenuService, private _activateroute: ActivatedRoute,  private auth: AuthenticationService) { }

 ngOnInit() {
    this.showmenu.show();  
    this.showmenu.show1();  
     }
}
