import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { ApiService } from '../index';
import { SessionService } from '../session/session.service';
import { API } from '../../const/index';

@Injectable()
export class AlertSettingsService {
  private _API: any = API;

  constructor(private apiService: ApiService, private sessionService: SessionService) { }

  public getSettings() {
    let headers: Headers = new Headers({
      Authorization: "bearer " + this.sessionService.token
    })
    return this.apiService.get(this._API.api_server + this._API.alert_settings_url, headers);
  }

  public putSettings(body) {

    let headers: Headers = new Headers({
      Authorization: "bearer " + this.sessionService.token
    })
    return this.apiService.put(this._API.api_server + this._API.alert_settings_url, body, headers);
  }
}
