import { Component } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observable';
obs = new Observable((observer) => {
     console.log("Observable starts")
     observer.next("1")
     observer.next("2")
     observer.next("3")
     observer.next("4")
     observer.next("5")
   });
   obs1 = new Observable((observer) => {
    console.log("Observable starts")
 
    setTimeout(() => { observer.next("1") }, 1000);
    setTimeout(() => { observer.next("2") }, 2000);
    setTimeout(() => { observer.next("3") }, 3000);
    setTimeout(() => { observer.next("4") }, 4000);
    setTimeout(() => { observer.next("5") }, 5000);
    
  })
  obsComplete = new Observable((observer) => {
    console.log("Observable starts")
 
    setTimeout(() => { observer.next("1") }, 1000);
    setTimeout(() => { observer.next("2") }, 2000);
    setTimeout(() => { observer.next("3") }, 3000);
    setTimeout(() => { observer.complete() }, 3500);   //sending complete event. observable stops here
    setTimeout(() => { observer.next("4") }, 4000);    //this code is never called
    setTimeout(() => { observer.next("5") }, 5000);
    
  })
    
ngOnInit() {
 
  this.obs.subscribe(
    val => { console.log(val) },                 //next callback
    error => { console.log("error") },           //error callback
    () => { console.log("Completed") }           //complete callback
  )
  this.obs1.subscribe(
    val => { console.log(val) },                 //next callback
    error => { console.log("error") },           //error callback
    () => { console.log("Completed") }           //complete callback
  )
  this.obsComplete.subscribe(
    val => { console.log(val) },                 //next callback
    error => { console.log("error") },           //error callback
    () => { console.log("Completed") }           //complete callback
  )

    //Observable from Create Method
    const obsUsingCreate = Observable.create( observer => {
      observer.next( '1' )
      observer.next( '2' )
      observer.next( '3' )
  
      observer.complete()
    })
    
     obsUsingCreate
       .subscribe(val => console.log(val),
               error=> console.log("error"),
               () => console.log("complete"))
               // of operators
               const array=[1,2,3,4,5,6,7]
               const obsof1=of(array);
               obsof1.subscribe(val => console.log(val),
                        error=> console.log("error"),
                       () => console.log("complete"))
                       const array1=[1,2,3,4,5,6,7]
  const array2=['a','b','c','d','e','f','g']  
  const obsof2=of(array1,array2 );
  obsof2.subscribe(val => console.log(val),
           error=> console.log("error"),
          () => console.log("complete"))
          const obsof5 = of(100, [1, 2, 3, 4, 5, 6, 7],"Hello World");
          obsof5.subscribe(val => console.log(val),
            error => console.log("error"),
            () => console.log("complete"))
            // from
            const array3 = [1, 2, 3, 4, 5, 6, 7]
            const obsfrom1 = from(array3);
            obsfrom1.subscribe(val => console.log(val),
              error => console.log("error"),
              () => console.log("complete"))
              let myMap = new Map()
      myMap.set(0, 'Hello')
      myMap.set(1, 'World')
      const obsFrom3 = from(myMap);
      obsFrom3.subscribe(val => console.log(val),
        error => console.log("error"),
        () => console.log("complete"))
}


}
//  create
// defer
// empty
// from
// fromEvent
// interval
// of
// range
// throw
// timer

// Combination	combineLatest, concat, merge, startWith , withLatestFrom, zip
// Filtering	debounceTime, distinctUntilChanged, filter, take, takeUntil
// Transformation	bufferTime, concatMap, map, mergeMap, scan, switchMap
// Utility	tap
// Multicasting	share