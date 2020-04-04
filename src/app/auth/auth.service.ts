import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {_throw} from 'rxjs/observable/throw';

interface AuthResponseData{
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBIxPyCMKgzsJ9BEoK8zWDnHXTJsOiMrYE', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(error => {
      console.log(error)
      let errorMessage = "An unknown error occured";
      if (!error.error || !error.error.error) {
        return _throw(errorMessage);
      }
      switch (error.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = "This email exists already!";
      }
      return _throw(errorMessage);
    }))
  }

}