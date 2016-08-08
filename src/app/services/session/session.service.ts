import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  public token: string = null;

  constructor() { 
    if(!this.token) {
      this.token = sessionStorage.getItem('access_token');
    }
  }

  public set(token: string) {
    sessionStorage.setItem('access_token', token);
    this.token = token;
  }

  public logout() {
    sessionStorage.removeItem('access_token');
    this.token = null;
    console.log(this.token);
  }
}
