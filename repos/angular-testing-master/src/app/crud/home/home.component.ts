import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(public crudService: CrudService, public router: Router) { }
  ngOnInit() {
    this.getProducts();
  }
  onCreate() {
    this.router.navigateByUrl('crud/create');
  }
  onUpdate(productId) {
    this.router.navigateByUrl('crud/update/', productId);
  }
  onRemove(productId) {
    this.crudService.delete(productId).subscribe(res => {
     this.getProducts();
    })
  }
  getProducts() {
    this.crudService.getAll().subscribe((data: Product[])=>{
      this.products = data;
    }) 
  }
}
