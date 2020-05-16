import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-un-select-all',
  templateUrl: './select-un-select-all.component.html',
  styleUrls: ['./select-un-select-all.component.css']
})
export class SelectUnSelectAllComponent implements OnInit {
  title;
  names: any;
  selectedAll: any;
  constructor() {
    this.title = "Select all/Deselect all checkbox";
    this.names = [
      { name: 'trilok', selected: false },
      { name: 'john', selected: false },
      { name: 'Anil', selected: false },
      { name: 'sunny', selected: false },
      { name: 'jitendra', selected: false },
      { name: 'rahul', selected: false },
      { name: 'rohit', selected: false },
      { name: 'sonu', selected: false },
    ]

  }
  selectAll() {
    for (var i = 0; i < this.names.length; i++) {
      this.names[i].selected = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.names.every(function(item:any) {
        return item.selected == true;
      })
  }
  ngOnInit() {
  }

}
