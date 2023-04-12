import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){ 
    this.loginService.LogUser(form.value).subscribe(
      res => {
        const user = JSON.stringify(res)//aaui lo que hacemos es parsear de json a string porque porque session styorage solo entiende strings
        sessionStorage.setItem('user', user)
        console.log(res)
        this.router.navigate(['mainPage'])
      }
    )
  }

  signUping(form:NgForm){

    this.loginService.Sign(form.value).subscribe(
      res=>{
        const signed= JSON.stringify(res)
        sessionStorage.setItem('user',signed)
        console.log(res)
        this.router.navigate(['mainPage'])
      }
    )

  }

}
