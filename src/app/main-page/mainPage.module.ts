import { ConfirmDialogComponent } from './../shared/confirm-dialog/confirm-dialog.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';



  

@NgModule({
  declarations: [
    MainPageComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MatTableModule,
    MatDialogModule,

  ]
})
export class MainPageModule { }