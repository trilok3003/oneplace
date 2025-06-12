import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/question.service';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
    questions=[];
    options=[];

  constructor(private questionService:QuestionService,private quizService:QuizService,private route:Router) { }

  ngOnInit() {
    this.quizService.currectAnswerCount=0;
    this.quizService.seconds=0;
    this.quizService.qnProgress=0;
    this.questionService.getQuestions().subscribe(list=>{
      this.questions=list.map(item=>{
        return {
          $key:item.key,
          ...item.payload.val()
        }
      });
      this.quizService.qns=[];
      this.quizService.questionss=this.questions;
      this.startTimer();
    });
  }
  startTimer(){
      this.quizService.timer=setInterval(()=>{
        this.quizService.seconds++;
      },1000);
  }
  Answer(qid,choice){
  //  this.quizService.qns[qid] = choice;
  this.quizService.qns[this.quizService.qnProgress] = choice;
   this.quizService.qnProgress++;
   if(this.quizService.qnProgress ===   this.questions.length ){
     clearInterval(this.quizService.timer);
     this.route.navigate(['/result']);
   }
  }

}
