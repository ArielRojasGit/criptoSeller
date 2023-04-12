
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';

const routes: Routes = [
{
  path: "", component: MainPageComponent
}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],//importante poner forChild porque forRoot se pone en app-routingModule.ts ya que no esta cargando de la raíz
  exports: [RouterModule]
})
export class MainPageRoutingModule {}