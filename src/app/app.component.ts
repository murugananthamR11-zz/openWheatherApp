import { Component,OnInit } from '@angular/core';
import{ WheatherService} from '../app/wheather.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 searchValue:string;
 wheatherShow:boolean;
 WheatherError:boolean;
 wheatherData;
 cardsArray =[]
 emptyField:boolean = false;
 loading:boolean = false;
 addShow:boolean =false;
 removeShow:boolean = false;
 cardArryIndex:number;
 date = new Date();
 constructor(private ws:WheatherService){}

  ngOnInit(){
    console.log(this.date)
  }

  onSearch(){

    if(!this.searchValue){
      this.emptyField = true;
      return;
    }

    this.loading = true;

    this.ws.getWheather(this.searchValue).subscribe(res => {
      this.wheatherData = res;
      this.wheatherShow = true;
      this.addShow = true;
      this.loading = false;
    },(err) => {
      this.WheatherError = true;
      this.loading = false;
      this.addShow = false;
    });
  }
  addCard(){
    this.cardsArray.unshift(this.wheatherData);
    this.wheatherShow = false;
    this.addShow = false;
    this.searchValue = '';
    console.log(this.cardsArray)
  }
  popClose(){
    this.wheatherShow = false;
    this.WheatherError = false;
    this.addShow = false;
    this.removeShow = false;
    this.emptyField = false;
    this.searchValue = '';
  }
  openCard(i){
    this.cardArryIndex = i
    this.wheatherData = this.cardsArray[i];
    this.wheatherShow = true;
    this.removeShow = true;
  }
  removeCard(){
    this.wheatherShow = false;
    this.removeShow = false;
    console.log(this.cardArryIndex);
    this.cardsArray.splice(this.cardArryIndex,1)
  }
}
