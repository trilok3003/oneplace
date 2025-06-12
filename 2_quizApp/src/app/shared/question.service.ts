import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
   questionList:AngularFireList<any>;

   
  constructor(private firebase:AngularFireDatabase) { 
    
  }
   getQuestions(){
    this.questionList=this.firebase.list('questions');
    // this.questionList=this.firebase.list('questions',  ref => ref.orderByChild('codigo').equalTo(codigo));

    return this.questionList.snapshotChanges();
  } 
  addQustion(questionObject){
    this.questionList=this.firebase.list('questions');
    this.questionList.push(questionObject);
  }
  getQuestionsAll() {
    this.questionList = this.firebase.list('questions');
    return this.questionList.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
  updateQuestions(id, value) {
    this.firebase.object(`/questions/${id}`).update(value);
  }
 
}
