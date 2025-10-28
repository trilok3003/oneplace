import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  currentTime: string;

  constructor() { }

	
	ngOnInit() {
		const date = new Date();
		this.currentTime = `${date.getHours()}:${date.getMinutes()}`
	}

}
