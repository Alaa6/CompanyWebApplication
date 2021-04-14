import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({

    // email: ['' ,[Validators.email , Validators.required] ],
    username: ['' ,[ Validators.required] ], 
    password: ['' ,[ Validators.required , Validators.pattern('[A-Za-z]{6,20}')]]
    // list : this.fb.group({
    //   item1 : [''] ,
    //   item2 : [''] 
    // })
    
  });

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  login (userName : string , password : string ){

  }

}
