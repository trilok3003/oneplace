import { Component, OnInit } from '@angular/core';
export enum AuctionStatus {
  NEW = 1,
  FOR_SALE = 2,
  SOLD = 3,
  PAID = 4,
  DELIVERED = 5,
  CLOSED = 6,
  EXPIRED = 7,
  WITHDRAWN = 8
}
@Component({
  selector: 'app-auction-status',
  templateUrl: './auction-status.component.html',
  styleUrls: ['./auction-status.component.css']
})
export class AuctionStatusComponent implements OnInit {
  currVal = AuctionStatus[Math.trunc(Math.random() * (Object.keys(AuctionStatus).length / 2 + 1))]
  constructor() { }

  ngOnInit() {
  }
  onAuction() {
  this.currVal = AuctionStatus[Math.trunc(Math.random() * (Object.keys(AuctionStatus).length / 2 + 1))]
  }
}
