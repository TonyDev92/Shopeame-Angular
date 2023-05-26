import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productInterface } from 'src/app/models/products.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = 'https://shopeame-backend-alpha.vercel.app/products';

  constructor(private http: HttpClient ) { }
  getProducts(){
    return this.http.get('https://shopeame-backend-alpha.vercel.app/products')
  }
  addProducts(product:productInterface) : Observable<productInterface> {
    return this.http.post<productInterface>(this.url, product);
  }
  updateProducts(product:productInterface): Observable<productInterface>{
    return this.http.put<productInterface>(this.url, product)
  }
  
}
