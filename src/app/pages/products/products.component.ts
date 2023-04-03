import { productInterface } from 'src/app/models/products.model';
import { ProductsService } from '../../shared/services/products.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
    constructor(private ProductsService : ProductsService) {}
    product: any;
    
    ngOnInit(): void {
      this.ProductsService.getProducts().subscribe(res => {
        console.log(res);
        this.product = res;
      });
    }
}
