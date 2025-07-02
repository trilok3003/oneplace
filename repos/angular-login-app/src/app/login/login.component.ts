import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthService,
  ) {
      if (this.authenticationService.currentUserValue) { 
          this.router.navigate(['/']);
      }
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/todo';
  }
  get f() { return this.loginForm.controls; }
//   onLogin() {
//       this.submitted = true;
//       if (this.loginForm.invalid) {
//           return;
//       }
//       this.loading = true;
//       this.authenticationService.login(this.f.username.value, this.f.password.value);
//       this.authenticationService.currentUser.subscribe(res => {
//             if(res)  this.router.navigate([this.returnUrl]);
//             if(res == null) {this.error = true; setInterval(res => {this.error = false; this.loading = false},2000)}
//         },
//         error => {
//             this.loading = false;
//         });
//   }
onLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value).subscribe(res=> {
        if(res) {
            localStorage.setItem('currentUser', JSON.stringify(res));
            this.authenticationService.setCurrentUser(res);
            this.router.navigate([this.returnUrl]);
        }
    },error => {
      this.error = true; setInterval(res => {this.error = false; this.loading = false},2000)
    })
}
 

}
