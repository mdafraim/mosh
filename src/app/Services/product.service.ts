import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

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
  getAll(){
    return this.http.get('https://mosh-ca4d5-default-rtdb.firebaseio.com/product.json')
    .pipe(map((res) => {
      const products = [];
      for(let key in res){
        if(res.hasOwnProperty(key)){
          products.push({...res[key], id:key})
        }
      }
      return products;
    }))
  }
}
