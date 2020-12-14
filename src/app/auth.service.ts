import { Injectable } from '@angular/core';
import { UserService } from './service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  role:string;

  constructor(private userService : UserService) { }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 200)
      }
    );
    return promise;
  }

  login(role:any) {
    this.role = role;
    return this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
