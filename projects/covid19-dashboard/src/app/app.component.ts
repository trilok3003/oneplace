import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data$: Observable<any> = this.dataService.getData();
  countryData$: Observable<any> = this.dataService.getDataForACountry("IN");
  constructor(private readonly dataService: DataService) {}

  changeCountry(countryCode) {
    this.countryData$ = this.dataService.getDataForACountry(countryCode);
  }
}
