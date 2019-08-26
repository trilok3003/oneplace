import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }
  onLogOut()
  {
   this.authService.logout();
   this.router.navigate['todo'];
  }
}
