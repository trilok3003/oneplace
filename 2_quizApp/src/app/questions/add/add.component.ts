import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/shared/question.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public form: FormGroup;

  constructor(private route: Router,
    private fb: FormBuilder, public questionService: QuestionService
  ) {
    this.form = this.fb.group({
      question: new FormControl(null, [Validators.required]),
      option: this.fb.array(['', '', '', '']),
      answer: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit() {

  }

  submit() {
    this.questionService.addQustion(this.form.value);
    this.route.navigate(['/quiz']);
  }
}
