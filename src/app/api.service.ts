import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  validateUsername(username: string): Observable<boolean> {
    console.log("Trigger API call");
    let existedUsers = ["trungvo", "tieppt", "phamnhattan"];
    let isValid = existedUsers.every(x => x !== username);
    return of(isValid).pipe(delay(1000));
  }
}
