import { productInterface } from 'src/app/models/products.model';
import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit{

  constructor(private ProductsService : ProductsService ){}
  title!:string;
  img!:string;
  description!: string;
  price!: number;
  text:string = '$';
  opiniones!:number;
  aleatory:number = this.numeroAleatorio(1,100);
  numeroAleatorio(param1: number = 1 ,param2:number = 100) {
    return Math.round(Math.random() * (param1 + param2) + 1);
  }

  ngOnInit(): void{

  }
  saveNew(desc:string, img: string, name:string, prc: number, stars:number){
    const newObj: productInterface = {
      description : desc,
      id: this.aleatory,
      image: img,
      name: name,
      price: prc,
      stars: stars
    }
    
      this.ProductsService.addProducts(newObj).subscribe(dates => console.log(dates))
    
  }
  
  onUpdateProduct(obj:productInterface): void{
    
    // this.ProductsService.updateProducts(obj.id).subscribe(prod => {
    //   const indexToUpdate = prod ? 
    // })
  }

}
