import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  Signup! : FormGroup;
  constructor(private formBuilder : FormBuilder,private service :AccountService) { }

  ngOnInit(): void {
    this.init();
  }
  private init() {
    this.Signup = this.formBuilder.group({
      firstName:[],
      lastname:[],
      email: [],
      password: [],
      confirmPassword: []
    })
  }
  public SignUp() : void {
      this.service.Signup(this.Signup.value).subscribe(data =>{
        if(data){
          alert("User is added")
        }
      },
      error => console.log(error))
    }
}
