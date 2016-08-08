import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { ApiService } from '../index';
import { SessionService } from '../session/session.service';
import { API } from '../../const/index';

@Injectable()
export class ScoresService {
  private _API: any = API;

  constructor(private sessionService: SessionService, private apiService: ApiService) { }

  public getScores() {
    let headers: Headers = new Headers({
      Authorization: "bearer " + this.sessionService.token
    })
    return this.apiService.get(this._API.api_server + this._API.scores_url, headers);
  }
}
