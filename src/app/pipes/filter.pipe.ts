import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const productsFiltered = [];

      for(const product of value){
        let low = product.name.toLowerCase();
        let a = args.toLowerCase();
        if(low.indexOf(a) > -1 || product.id == args){
          productsFiltered.push(product)
        }
      }
    return productsFiltered;
  }

}
