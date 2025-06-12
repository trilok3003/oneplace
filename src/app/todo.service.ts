import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private dbPath = '/todos';
  todoscollection: AngularFirestoreCollection<Todo>;
  todos
  // : Observable<Todo[]>;
  // TodosRef: AngularFireList<Todo> = null;
  todosRef:AngularFirestoreCollection<Todo> = null;
  // constructor(private db: AngularFireDatabase) {
  //   this.TodosRef = db.list(this.dbPath);
  // }
  constructor(private firestore: AngularFirestore) {
    // const things = firestore.collection('todos').valueChanges();
    // things.subscribe(res => console.log(res) );
}
 
  createTodo(todo: Todo) {
    console.log('dsd')
    console.log(todo)
      return this.firestore.collection('todos').add({...todo});
    // return this.firestore.collection('policies').add(policy);
  }
 
  updateTodo(key: any, value: any) {
    this.firestore.doc('todos/' + key).update(value);
    // delete policy.id;
    // this.firestore.doc('policies/' + policy.id).update(policy);
  }
 
  getTodosList() {
    return this.firestore.collection('todos').snapshotChanges();
    // return this.firestore.collection('policies').snapshotChanges();
  }
  getTodosDoneList() {
    return this.firestore.collection('todos', ref => {
      return ref.where('active', '==', false)
    }).snapshotChanges();
  }
  getTodosNotDoneList() {
    return this.firestore.collection('todos', ref => {
      return ref.where('active', '==', true)
    }).snapshotChanges();
  }
 
 
  deleteAll(key?) {
    if(key) {
      this.firestore.doc('todos/' + key).delete();
    }
    else {
      this.firestore.doc('todos/').delete();
    }
    // this.firestore.doc('policies/' + policyId).delete();
  }
}
