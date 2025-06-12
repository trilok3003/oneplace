import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  quizListArray:any[];  
  showSuccessMessage:boolean;
  constructor(private quizService:QuizService,private route:Router) { }

  ngOnInit() {
    this.quizService.getQuizUsers().subscribe(list=>{
      this.quizListArray=[];
     this.quizListArray= list.map(item=>{
      return {
        $key:item.key,
        ...item.payload.val()
      }
      });
    });

  }
  OnSubmit(form:NgForm){
      this.quizService.addUser(form.value);
       // form.reset();
        /* this.showSuccessMessage=true;
          setTimeout(()=>this.showSuccessMessage = false,3000); */
          localStorage.clear();
          localStorage.setItem('participant',JSON.stringify(form.value));
          this.route.navigate(['/quiz']);
  }

}
