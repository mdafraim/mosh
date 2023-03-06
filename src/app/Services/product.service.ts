import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  create(product: { title:string, price:string, category:string, imageUrl:string}){
    this.http.post('https://mosh-ca4d5-default-rtdb.firebaseio.com/product.json', product)
    .subscribe((res) => {
      console.log(res);
    });
  }
}
