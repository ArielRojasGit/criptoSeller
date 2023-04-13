import { ConfirmDialogComponent } from './../shared/confirm-dialog/confirm-dialog.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { HeaderComponent } from '../shared/header/header.component';



  

@NgModule({
  declarations: [
    MainPageComponent,
    ConfirmDialogComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MatTableModule,
    MatDialogModule,


  ]
})
export class MainPageModule { }