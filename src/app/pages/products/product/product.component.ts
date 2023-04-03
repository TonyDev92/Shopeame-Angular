import { productInterface } from './../../../models/products.model';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

    filterProducts= '';
    @Input() products!: productInterface[]; 
    constructor() {}
    ngOnInit(): void {
      
    }
}
