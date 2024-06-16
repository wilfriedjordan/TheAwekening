import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorting',
  standalone:true,
})
export class ShortingPipe implements PipeTransform {

  transform(value:string, args?:number):string {
    if(value.length <= args!){
      return value;
    }
    return value.substring(0,args)+ "...";
  }

}
