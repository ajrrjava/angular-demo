import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private url = '';

  login1(cd: any, url1:string) {
    console.log(cd);
    console.log(url1);
    this.loggedIn = true;
    this.url = url1;
  }

  login(url:string) {
    this.loggedIn = true;
    this.url = url;
  }

  logout() {
    this.loggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  getUrl(): string {
    return this.url;
  }
}
