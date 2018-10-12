import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss']
})
export class UserSignUpComponent implements OnInit {

  public form ={
    username:null,
    email:null,
    password:null,
    cpassword:null,
  }
  users;
  id:number;
  username:string;
    email:string;
    password:string;
    cpassword:string;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
 
  let input = new FormData();
  input.append('name',this.username);
  input.append('email',this.email);
  input.append('password',this.password);
  input.append('confirm_password',this.cpassword);
    return this.http.post('http://127.0.0.1:8000/api/customer',input).subscribe(
      data => {
        this.users = data;
        console.log(data);
        this.username=null;
        this.email=null;
        this.password=null;
        this.cpassword=null;
      },
  error => console.log(error)
    );
   
  } 
  
}
