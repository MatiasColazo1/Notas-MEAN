import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient, private router: Router) { }

  signUp(user: User){
    return this.http.post<User>(this.URL + '/signup', user)
  }

  signIn(user: User){
    return this.http.post<any>(this.URL + '/signin', user)
  }

  loggedIn(): boolean{
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logOut() {
    localStorage.removeItem('token')
    this.router.navigate(['/signin'])
  }
}

interface User {
  usuario: string;
  password: string;
}
