import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ApiService {
  constructor(private http: Http) { }

  public get(url: string, headers: Headers): Observable<any> {
    return this.http.get(url, {headers: headers})
                    .map((res) => { return res.json() })
                    .catch(this.handleError)
  }

  public post(url: string, body: string, headers: Headers): Observable<any> {
    return this.http.post(url, body, {headers: headers})
                    .map((res) => { return res.json() || {} })
                    .catch(this.handleError)
  }

  public put(url: string, body: string, headers: Headers): Observable<any> {
    return this.http.put(url, body, {headers: headers})
                    .map((res) => { 
                      var val: any = {};
                      try {
                        val = res.json();
                      }
                      catch(e) {
                      }
                      return val
                    })
                    .catch(this.handleError)
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);

    return Observable.throw(errMsg);
  }
}
