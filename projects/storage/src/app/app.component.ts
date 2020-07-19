import { Component } from '@angular/core';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storage';
  key;
  value;
  constructor(public storageService: StorageService) {
    this.storageService.changes.subscribe(res => {
      console.log(res);
    })
  }
  add() {
this.storageService.store(this.key, this.value);
  }
  getStorage() {
   return this.storageService.getStorage();
  }
}
