import { Component, OnInit  } from '@angular/core';
import { Router} from '@angular/router';
import {ShowmenuService} from './showmenu.service';
import { AuthenticationService } from './authentication/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
  
  
export class AppComponent implements OnInit {  
  
constructor(
  private _router:Router,
  public showmenu: ShowmenuService,
  private authService: AuthenticationService){}

  userType: string = '';

 ngOnInit(){
    this.showmenu.hide();
    this._router.navigate(['Login/myform']);
    
    this.authService.userType.subscribe(value => this.userType = value);
  }
  logout()
  {
    this.showmenu.hide();
    this._router.navigate(['Login/myform']);
  }
  
}
  

