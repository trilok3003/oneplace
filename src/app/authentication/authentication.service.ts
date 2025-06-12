import { Injectable } from '@angular/core';
import { user } from '../user';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


let users = [new user('admin', '123'), new user('user', '123')];


@Injectable()
export class AuthenticationService {
  user = new user;
  userType: BehaviorSubject<string> = new BehaviorSubject<string>(this.getUserType());

  constructor(private _router: Router) { }

  getUserType() {
    return localStorage.getItem('user')
  }

  get isLoggedIn() {
    return true;
  }

  isSuperAdmin() {
    if (localStorage.getItem('user') === "admin") {
      return true;
    } else {
      return false;
    }
  }

  login(username, password) {
    this.user.username = username;
    this.user.password = password;

    let authenticatedUser = users.find(u => u.username === this.user.username);
    if (authenticatedUser && authenticatedUser.password == this.user.password) {
      localStorage.setItem("user", this.user.username);
      this.userType.next(this.user.username);
      this._router.navigate(['/Admin']);
    }

    else {
      alert("Please Enter Valid Username/Password..!!");
    }
  }
}

