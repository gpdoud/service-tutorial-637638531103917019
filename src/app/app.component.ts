import { Component } from '@angular/core';
import { UserService } from './serices/user.service';
import { User } from './user.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-tutorial';

  constructor(
    private usersvc: UserService
  ) {}

  ngOnInit(): void {
    let newUser = new User();
    newUser.id = 5;
    newUser.username = "ZZZZZZZ";
    newUser.password = "Train@MAX";
    newUser.firstname = "ZZZ"
    newUser.lastname = "ZZZ"
    newUser.phone = "911";
    newUser.email = "help@anywhere.com";

    this.usersvc.login("xx", "xxx").subscribe(
      res => { console.log("Success:", res); },
      err => { console.error(err); }
    );
  }
}
