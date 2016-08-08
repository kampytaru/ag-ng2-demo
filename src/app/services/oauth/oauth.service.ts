import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { ApiService } from '../index';
import { API } from '../../const/index';

@Injectable()
export class OauthService {
  private _API: any = API;

  constructor(private apiService: ApiService) { }

  public getUnauthenticatedToken() {
    let body = "grant_type=client_credentials";
    let headers: Headers = new Headers({
      Authorization: "Basic " + this._API.client_secret
    })
    return this.apiService.post(this._API.oauth_server + this._API.oauth_url, body, headers);
  }

  public getAuthenticatedToken(username: string, password: string, custnum: string) {
    let body = "grant_type=password";
        body += "&username=" + username + "/" + encodeURIComponent(password);
        body += "&password=" + custnum;
    let headers: Headers = new Headers({
      Authorization: "Basic " + this._API.client_secret
    })
    return this.apiService.post(this._API.oauth_server + this._API.oauth_url, body, headers);
  }
}
