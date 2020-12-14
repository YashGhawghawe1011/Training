import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.scss']
})
export class LibrarianComponent implements OnInit {

  users:Array<User>;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.fetchUser().subscribe(
      data => {
        this.users = data;
      }
    )
  }

}
