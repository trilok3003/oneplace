import { Component, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  isLoading1: boolean;
  constructor(public loaderService: LoaderService) { }

  ngOnInit(): void {
  //  this.isLoading.subscribe(res => {this.isLoading1 = res})
    
  }

}
