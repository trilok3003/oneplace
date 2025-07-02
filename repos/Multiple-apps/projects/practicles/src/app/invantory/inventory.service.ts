import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  fruits: Fruit[] = [
    {
      name: 'Banana',
      rate: 40
    },
    {
      name: 'mango',
      rate: 120
    },
    {
      name: 'lichi',
      rate: 160
    }
  ];
  GetAllFruits(): Fruit[] {
    return this.fruits;
  }

  AddFruit(fruit: Fruit): void {
    this.fruits.push(fruit);
  }
}
