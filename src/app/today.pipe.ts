import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'today'
})
export class TodayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
  
    var datePipe = new DatePipe("en-US");
    
    if(value){
      var d1 =  datePipe.transform(new Date(), 'dd/MM/yyyy'); 
      var d2 = datePipe.transform(new Date(value), 'dd/MM/yyyy'); 
     
      if(d1 == d2 ){
        return 'Today';
      }
      
    }
    value = datePipe.transform(new Date(value), 'dd MMM yyyy');
    return value
  }

}
