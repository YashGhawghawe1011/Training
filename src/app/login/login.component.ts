import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string="";
  password:string="";
  date = new Date();
  role:string;

  constructor(private route:ActivatedRoute,private router:Router,
    private userService:UserService,private authService:AuthService) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.authService.login(this.role);
    this.router.navigate(['/ViewAll']);
  }

  checkEmail(event:any){
    console.log(event.target.value);
  }

  checkPassword(event:any){
    console.log(event.target.value);
  }

  checkRole(event:any){
    this.role = event.target.value;
    console.log(this.role);
  }

}
