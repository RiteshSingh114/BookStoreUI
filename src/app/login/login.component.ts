import { LoginService } from './../login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup ;

  constructor(private formBuilder :FormBuilder,private service : LoginService) { }

  ngOnInit(): void {
    this.init();
  }
  init() {
    this.loginForm = this.formBuilder.group({
      email:[],
      password:[]
    })
  }

  login():void{
    this.service.login(this.loginForm.value).subscribe(
      data=>{
        localStorage.setItem("token",data.value)
      },
      error => console.log("failed",error)
    )
  }

}
