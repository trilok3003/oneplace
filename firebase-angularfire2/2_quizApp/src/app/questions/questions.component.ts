import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../shared/question.service';
import { QuizService } from '../shared/quiz.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public form: FormGroup;
  questions = [];

  constructor(private route: Router,
    private fb: FormBuilder, public questionService: QuestionService
  ) {
    this.form = this.fb.group({
      questions: this.fb.array([]),
    });
  }

  ngOnInit() {
    // this.questionService.getQuestions().subscribe(list => {
    //   this.questions = list.map(item => {
    //     return {
    //       $key: item.key,
    //       ...item.payload.val()
    //     }
    //   })
    //   this.questions.forEach((ele, i) => {
    //     this.addQuestion();
    //     this.questionsFormArray.at(i).patchValue(ele);
    //   })
    // });
    this.questionService.getQuestionsAll().subscribe(list => {
      this.questionsFormArray.controls = [];
      this.questions = list;
      console.log( this.questions );
      this.questions.forEach((ele, i) => {
        this.addQuestion();
        this.questionsFormArray.at(i).patchValue(ele);
      })
    });
  }


  public addQuestion() {

    const questionFormGroup = this.fb.group({
      $key: new FormControl(null),
      question: new FormControl(null, [Validators.required]),
      option: this.fb.array(['', '', '', '']),
      answer: new FormControl(null, [Validators.required])
    });
    this.questionsFormArray.insert(this.questionsFormArray.length, questionFormGroup);
  }
  public removeQuestion(i) {
    const questionsFormArray = <FormArray>this.form.controls['questions'];
    questionsFormArray.removeAt(i);
  }
  get questionsFormArray(): FormArray {
    return this.form.get('questions') as FormArray
  };
  updateQuestion(i) {
    const { $key } = this.questionsFormArray.at(i).value;
    const { question, option, answer } = this.questionsFormArray.at(i).value;
    if($key) {
      this.questionService.updateQuestions($key, { question, option, answer })
    }
    else{
      this.questionService.addQustion({ question, option, answer })
    }
  }
}
