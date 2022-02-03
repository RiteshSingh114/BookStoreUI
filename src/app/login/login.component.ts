import { LoginService } from './../login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup ;

  constructor(private route : ActivatedRoute,private router : Router, private formBuilder :FormBuilder,private service : LoginService) { }

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
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')
        this.router.navigate([returnUrl||"/"])
      },
      error => console.log("failed",error)
    )
  }

}
