import { Component, OnInit } from '@angular/core';
import { user } from './user';

@Component({
  selector: 'app-searching-pagination-table',
  templateUrl: './searching-pagination-table.component.html',
  styleUrls: ['./searching-pagination-table.component.css']
})
export class SearchingPaginationTableComponent implements OnInit {


   userList: user[];
   userListBackup: user[];
  firstItemIndex: number;
  lastItemIndex: number;
  pagesize: number = 5;

  constructor() { }

  ngOnInit() {
    this.getAlldata();
    this.firstItemIndex = 0;
    this.lastItemIndex = 5;
  }

  getAlldata() {
    this.userList = [
      { id: 1, userName: "Ramesh", password: "rebqwtye", email: "ramesh@gmail.com", contactNo: "9788235466", address: "123 RG Road, XYCity" },
      { id: 2, userName: "Suresh", password: "rebqwtye", email: "suresh@gmail.com", contactNo: "9750235444", address: "446 RG Road, XYCity" },
      { id: 3, userName: "Ganesh", password: "rebqwtye", email: "ganesh@gmail.com", contactNo: "9789235422", address: "765 RG Road, XYCity" },
      { id: 4, userName: "Bhavesh", password: "rebqwtye", email: "bhavesh@gmail.com", contactNo: "9728235466", address: "123 RG Road, XYCity" },
      { id: 5, userName: "Bhavesh", password: "rebqwtye", email: "bhavesh@gmail.com", contactNo: "9748235466", address: "78 RG Road, XYCity" },
      { id: 6, userName: "Bhavesh", password: "rebqwtye", email: "bhavesh@gmail.com", contactNo: "9786235466", address: "123 RG Road, XYCity" },
      { id: 7, userName: "Bhavesh", password: "rebqwtye", email: "bhavesh@gmail.com", contactNo: "9788237466", address: "123 RG Road, XYCity" }
    ];
    this.userListBackup = Object.create(this.userList);
  }

  onNextPageClick(data: any) {
    this.firstItemIndex = this.lastItemIndex < (this.userList.length - 1) ? this.lastItemIndex : this.firstItemIndex;
    this.lastItemIndex = (this.lastItemIndex + this.pagesize) < this.userList.length ? (this.lastItemIndex + this.pagesize) : (this.userList.length - 1);
  }

  onPreviousPageClick(data: any) {
    this.lastItemIndex = this.firstItemIndex > 0 ? this.firstItemIndex : this.lastItemIndex;
    this.firstItemIndex = (this.firstItemIndex - this.pagesize) > 0 ? (this.firstItemIndex - this.pagesize) : 0;
  }

  search(searchValue: String) {
    if (!searchValue) {
      this.userList = Object.create(this.userListBackup);
    } else {
      this.userList = this.userListBackup.filter(user =>
        JSON.stringify(user).trim().toLowerCase().includes(searchValue.trim().toLowerCase())
      );
    }
  }
}