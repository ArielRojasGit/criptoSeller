import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
  path: "login", loadChildren : ()=> import("./login/login.module").then(m=>m.LoginModule)
},
{
  path: "mainPage", loadChildren : ()=> import("./main-page/mainPage.module").then(m=>m.MainPageModule)
}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
