import { Component, OnInit } from '@angular/core';
import { Apod } from 'src/app/models/apod';
import { NasaService } from 'src/app/services/nasa.service';

@Component({
  selector: 'app-nasa-bg',
  templateUrl: './nasa-bg.component.html',
  styleUrls: ['./nasa-bg.component.css']
})
export class NasaBgComponent implements OnInit {

  public apod:Apod|null = null;

  public cont:number = 0;
  public visibility:boolean = true;
  public result = ["you_win.png", "you_lose.png"];
  public img:string = this.result[0];
  public index:number = 0;

  constructor(private nasaService:NasaService) { }

  ngOnInit(): void {
    this.getApod();
  }

  getApod(){
    this.nasaService.getRamdonApodApi().subscribe(
      (data:Apod)=>{
        this.apod = data;
        console.log(this.apod.title);
      },
      (error)=>{
          this.apod= null;
          console.log(error);          
      }
    );
  }
  Fight(){
    this.cont = this.cont + 1;
    this.visibility = false;
    this.img = this.result[this.index];
    if(this.index === 1){
      this.index = 0;
    }else{
      this.index = 1; 
    }
    this.stateChange(this);
  }

  stateChange(c:NasaBgComponent) {
    setTimeout(function () {
      c.visibility = true;
      c.getApod();
    }, 3000);
  }

}
