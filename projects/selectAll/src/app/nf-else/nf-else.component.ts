import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nf-else',
  templateUrl: './nf-else.component.html',
  styleUrls: ['./nf-else.component.css']
})
export class NfElseComponent implements OnInit {
  stocks$: Observable<Object[]>;

  constructor() { }

  ngOnInit() {
  }

}
