import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {
   firstObj = { name: 'trilok', address: 'noida' };
   secondObj = { age: 26 , name: 'Anil'};
   mergedObj ;

   arrayOfObj = [
    {
      name: 'Ironman',
    },
    {
      name: 'Spiderman',
    },
  ];
  objToMergeInArray = {
    name: 'Captain America',
    from: 'Marvel Universe',
  };
  mergedArrayOfObj;
  firstArr = [
    {
      id: 'marvel',
      winner: 'Captain America',
    },
    {
      id: 'DC',
      winner: 'Aquaman',
    },
  ];
  secondArr = [
    {
      id: 'freelancer',
      winner: 'Wonder women',
    },
    {
      id: 'marvel',
      winner: 'Param', //why not
      strenths: ['fly', 'fight', 'speed'],
    },
  ];
  mergedTwoArray;
   a = [44, 33, 22];
 b = [33, 22, 11];
 AandB
 mergedTwoArrayOfObjectsUnique;
  constructor() { }

  ngOnInit() {
  // object destructuring to merge two objects
   this.mergedObj = { ...this.firstObj, ...this.secondObj };
   // Merge objects into an array of objects
   this.mergedArrayOfObj = [...this.arrayOfObj, this.objToMergeInArray];
   // Merging two arrays
  this.mergedTwoArray = [...this.firstArr, ...this.secondArr];
  // Union of arrays
  const AandB = [...this.a, ...this.b];
  const distinctValuesInAandBSet = new Set(AandB);
  const setToArray = [...distinctValuesInAandBSet];
  this.AandB = setToArray;
  // Union of objects in an array based on unique key value
  const mergedArray = [...this.secondArr, ...this.firstArr];
let set = new Set();
let unionArray = mergedArray.filter(item => {
  if (!set.has(item.id)) {
    set.add(item.id);
    return true;
  }
  return false;
}, set);
this.mergedTwoArrayOfObjectsUnique = unionArray
  }

}
