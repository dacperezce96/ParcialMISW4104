import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Cafe[] = [];
  nroBlend: number = 0;
  nroOrigen: number = 0;

  constructor(private cafeService: CafeService) { }

  getCafes(): void{
    this.cafeService.getCafes().subscribe((cafes)=>{
      this.cafes = cafes;
      this.getNroTipos();
    });
  }

  getNroTipos(): void{
    this.cafes.forEach(c => {
      if(c.tipo === "Blend"){
        this.nroBlend+=1;
      }else if(c.tipo === "Café de Origen"){
        this.nroOrigen+=1;
      }
      //console.log(c.id);
    });
    //console.log(`le numero de blend es ${this.nroBlend}`);
    //console.log(`le numero de origen es ${this.nroOrigen}`);
  }

  ngOnInit() {
    this.getCafes();
  }


}
