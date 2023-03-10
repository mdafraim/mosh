import { HttpClient } from '@angular/common/http';
import { ProductService } from './../../Services/product.service';
import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/model/products';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  allProducts: products[] = []
  constructor(private ProductService: ProductService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.ProductService.getAll()
    .subscribe((products) => {
      console.log(products);
      this.allProducts = products;
    })
  }

}
