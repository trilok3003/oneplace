import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-grid-sorting',
  templateUrl: './angular-grid-sorting.component.html',
  styleUrls: ['./angular-grid-sorting.component.css']
})
export class AngularGridSortingComponent implements OnInit {
  sortOrder: string = 'asc';
  sortColumn: string = 'ticker';
  performanceData: any[] =
    [{
      "ticker": "IVV",
      "asset class code": "EQ",
      "asset class Name": "Equity",
      "name": "iShares Core S&P 500 ETF",
      "returns 1Y": 1.74,
      "returns 2Y": 1.2,
      "returns 3Y": 2.2,
      "returns 4Y": -0.2,
      "returns 5Y": 0.6
    }, {
      "ticker": "EFA",
      "asset class code": "EQ",
      "asset class Name": "Equity",
      "name": "iShares MSCI EAFE ETF",
      "returns 1Y": 1.74,
      "returns 2Y": 1.2,
      "returns 3Y": 2.2,
      "returns 4Y": -0.2,
      "returns 5Y": 0.6
    }, {
      "ticker": "AGG",
      "asset class code": "FI",
      "asset class Name": "Fixed Income",
      "name": "iShares Core U.S. Aggregate Bond ETF",
      "returns 1Y": 1.24,
      "returns 2Y": 2.2,
      "returns 3Y": 2.9,
      "returns 4Y": -0.4,
      "returns 5Y": 0.9
    }, {
      "ticker": "IWF",
      "asset class code": "EQ",
      "asset class Name": "Equity",
      "name": "iShares Russell 1000 Growth ETF",
      "returns 1Y": 3.14,
      "returns 2Y": 3.1,
      "returns 3Y": 4.2,
      "returns 4Y": -0.4,
      "returns 5Y": 0.2
    }, {
      "ticker": "SLV",
      "asset class code": "COMM",
      "asset class Name": "Commodities",
      "name": "iShares Silver Trust",
      "returns 1Y": 3.74,
      "returns 2Y": 2.1,
      "returns 3Y": 5.2,
      "returns 4Y": 2.4,
      "returns 5Y": 9.0
    }];
  SortData(col: string): void {
    if (this.sortColumn == col) {
      if (this.sortOrder == 'asc')
        this.sortOrder = 'desc';
      else
        this.sortOrder = 'asc';
    }
    else {
      this.sortColumn = col;
      this.sortOrder = 'asc';
    }
    this.performanceData = this.performanceData.sort((a, b) => {
      if (a[col] < b[col])
        return this.sortOrder == 'asc' ? -1 : 1;
      if (a[col] > b[col])
        return this.sortOrder == 'asc' ? 1 : -1;
      return 0;
    })
  }
  ngOnInit() {
  }

}
