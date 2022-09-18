import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  cor:boolean = true;
  colorBackground = "";
  con:number = 0;
  constructor() {}

  ngOnInit(): void {
  }

  TrocarCor():void{
    if(this.con == 0){
      this.colorBackground = "black";
      this.con++;
      } 
    }
  
  }
