import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "../../api-integration/users.service";
import {map} from "rxjs/operators";
import {LocalStorageService} from "angular-web-storage";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;

  password!: string;

  constructor(
    private readonly router: Router,
    private readonly userService: UsersService,
    private readonly localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.email, this.password)
      .subscribe(
        session => {
          this.localStorage.set('session', session);
          this.router.navigate(['/products/list'])
        }
      );
  }

}
