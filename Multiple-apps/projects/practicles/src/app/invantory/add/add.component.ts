import { Component, OnInit, ViewChild } from '@angular/core';
import { Fruit } from '../fruit';
import { NgForm } from '@angular/forms';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  fruit: Fruit = {
    name: '',
    rate: 0
  }
  @ViewChild('fruitForm', {static: false}) private fruitForm: NgForm;
  constructor(private _addFruit: InventoryService) { }

  AddFruit(): void {
    this._addFruit.AddFruit(Object.assign({}, this.fruit));
    alert('Fruit Added!');
    this.fruitForm.reset();
  }
  ngOnInit() {
  }

}
