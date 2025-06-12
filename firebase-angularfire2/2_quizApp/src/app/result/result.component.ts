import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { QuestionService } from '../shared/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  answers=[];
  users=[];
  constructor(private quizService:QuizService,private questionService:QuestionService,private route:Router) { }

  ngOnInit() {
    this.questionService.getQuestions().subscribe(
      (data)=>{
        this.answers=data.map(item=>{
          return {
            $key:item.key,
            ...item.payload.val()
          }
        });
       this.answers.forEach((element,index)=>{
        // console.log(element.answer,index);
         if(element.answer == this.quizService.qns[index]){
           this.quizService.currectAnswerCount++;
         }

       });
    });
    this.getUsers();
  }
  getUsers(){
    this.quizService.getQuizUsers().subscribe(list=>{
    this.users=list.map(item=>{
      return{
        $key:item.key,
          ...item.payload.val()
      }
    });
    
    });
  }
  
  updateUser(){
    var email = JSON.parse(localStorage.getItem('participant')).email;
     this.users.forEach((e,i)=>{
       if(e.email == email){
      this.quizService.updateUser(e.$key);
       }
      }); 
  }
 restart(){
   this.route.navigate(['/quiz']);
 }

}
