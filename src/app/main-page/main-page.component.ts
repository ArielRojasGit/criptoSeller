import { Component, OnInit } from '@angular/core';
import { CriptomonedasService } from '../services/criptomonredas.service';
import { MatTableDataSource } from '@angular/material/table';
import { Monedas } from '../models/Monedas.model';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  dataSource: MatTableDataSource<Monedas> = new MatTableDataSource<Monedas>()
  displayedColumns : string[] = ['nombre Moneda' ,'stock','valor', 'trader']
  
  constructor(private criptoMonedasService: CriptomonedasService) { }

  ngOnInit(): void  {
  
    this.criptoMonedasService.gettingCriptos().subscribe(
      res=>{
        this.dataSource.data = res as Monedas[]
        console.log(res)
      }
    )

  }

}
