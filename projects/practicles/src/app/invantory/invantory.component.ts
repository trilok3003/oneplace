import { Component, OnInit } from '@angular/core';
import { Fruit } from './fruit';
import { InventoryService } from './inventory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invantory',
  templateUrl: './invantory.component.html',
  styleUrls: ['./invantory.component.css']
})
export class InvantoryComponent implements OnInit {
  fruits: Fruit[];
  currFruit: Fruit;
  currFruitIndex = 0;

  constructor(private _getFruits: InventoryService, private _router: Router) { }

  ngOnInit() {
    this.fruits = this._getFruits.GetAllFruits();
    this.currFruit = this.fruits[0];
  }

  ShowNextFruit(): void {
    if (this.currFruitIndex == this.fruits.length - 1) {
      this.currFruitIndex = 0;
    }
    else {
      this.currFruitIndex++;
    }
    this.currFruit = this.fruits[this.currFruitIndex];
  }

  AddFruit() {
    this._router.navigate(['/Add']);
  }


}
