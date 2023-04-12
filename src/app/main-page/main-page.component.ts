import { Component, OnInit } from '@angular/core';
import { CriptomonedasService } from '../services/criptomonredas.service';
import { MatTableDataSource } from '@angular/material/table';
import { Monedas } from '../models/Monedas.model';
import {MatInputModule} from '@angular/material/input';
import { ConfirmDialogComponent } from './../shared/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  dataSource: MatTableDataSource<Monedas> = new MatTableDataSource<Monedas>()
  displayedColumns : string[] = ['nombre Moneda' ,'stock','valor', 'trader']
  
  constructor(private criptoMonedasService: CriptomonedasService,private matDialog:MatDialog) { }

  ngOnInit(): void  {
  
    this.criptoMonedasService.gettingCriptos().subscribe(
      res=>{
        this.dataSource.data = res as Monedas[]
        console.log(res)
      }
    )

  }
  open(){
    this.matDialog.open(ConfirmDialogComponent)
  }
}
