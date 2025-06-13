import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-pipe-accepting',
  templateUrl: './generic-pipe-accepting.component.html',
  styleUrls: ['./generic-pipe-accepting.component.css']
})
export class GenericPipeAcceptingComponent implements OnInit {
  name: string = 'trilok'
  skills: string[] = ['Angular', 'JavaScript']

  Greet(name: string): string {
    return 'Hi, I\'m ' + name
  }

  Skills(skills: string[]): string {
    return 'I\'m good at ' + skills.join(', ')
  }
  ngOnInit() {
  }

}
