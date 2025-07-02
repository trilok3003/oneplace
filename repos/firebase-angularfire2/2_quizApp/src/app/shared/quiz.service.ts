import { Injectable } from '@angular/core';
import { AngularFireList,AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
   quizUserList:AngularFireList<any>;
   seconds:number;
   timer;
   qnProgress:number;
   qns:any[];
   currectAnswerCount:number=0;
   questionss=[];
  constructor(private firebase:AngularFireDatabase) { }
  getQuizUsers(){
    this.quizUserList=this.firebase.list('quizUsers');
    return this.quizUserList.snapshotChanges();
  }
  addUser(user){
    this.quizUserList.push({
      name:user.name,
      email:user.email,
      score:0,
      timeSpent:0
    });
  }
  updateUser(userkey){
    this.quizUserList.update(userkey,{
      score:this.currectAnswerCount,
      timeSpent:this.displayTimeElapsed()
    });
  }
  displayTimeElapsed(){
    return Math.floor(this.seconds /3600) + ':' + Math.floor(this.seconds /60) + ':' + Math.floor(this.seconds % 60 )
  }
  getParticipant(){
     var participant = JSON.parse(localStorage.getItem('participant'));
     return participant.name;
  }
  
  
}




// The API for AngularFireList can be found here.

// From the API:

// Adding new items:

// const itemsRef = db.list('items');
// itemsRef.push({ name: newName });
// Replacing items in the list using set:

// const itemsRef = db.list('items');
// // to get a key, check the Example app below
// itemsRef.set('key-of-some-data', { size: newSize });
// Updating items in the list using update

// const itemsRef = db.list('items');
// // to get a key, check the Example app below
// itemsRef.update('key-of-some-data', { size: newSize });
// Removing items from the list:

// const itemsRef = db.list('items');
// // to get a key, check the Example app below
// itemsRef.remove('key-of-some-data');
// Deleting the entire list:

// const itemsRef = db.list('items');
// itemsRef.remove();
// A full example for Angular Firebase CRUD using COLLECTIONS can be found in this tutorial.

// The example handles users.

// Create:

// createUser(value, avatar){
//   return this.db.collection('users').add({
//     name: value.name,
//     nameToSearch: value.name.toLowerCase(),
//     surname: value.surname,
//     age: parseInt(value.age),
//     avatar: avatar
//   });
// }
// Read:

// getPeople(){
//   return new Promise<any>((resolve, reject) => {
//     this.afs.collection('/people').snapshotChanges()
//     .subscribe(snapshots => {
//       resolve(snapshots)
//     })
//   })
// }
// Update:

// updateUser(userKey, value){
//   value.nameToSearch = value.name.toLowerCase();
//   return this.db.collection('users').doc(userKey).set(value);
// }

// Delete:

// deleteUser(userKey){
//   return this.db.collection('users').doc(userKey).delete();
// }