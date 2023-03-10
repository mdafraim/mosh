import { ProductService } from './../../Services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  
  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
  }
  save(product: { title:string, price:string, category:string, imageUrl:string}){
     this.ProductService.create(product);
   
  }

}
