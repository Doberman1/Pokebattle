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

}
