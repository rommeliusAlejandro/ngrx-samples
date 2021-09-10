import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {Session, User} from "../types/user.types";
import {map, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  login(email: string, password: string): Observable<Session> {
    return this.httpClient.get<User[]>('/api/users')
      .pipe(
        switchMap(users => {
          const user = users.find(user => user.email === email && user.password === password);

          if (user) {
            return of({
              user,
              token: btoa(`${email}:${password}`)
            });
          }
          return throwError(`Can't authenticate ${email} - ${password}`);
        })
      );
  }
}
