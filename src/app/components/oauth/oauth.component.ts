import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OauthService, ApiService, SessionService } from '../../services/index';

@Component({
  moduleId: module.id,
  selector: 'app-oauth',
  templateUrl: 'oauth.component.html',
  styleUrls: ['oauth.component.css'],
  providers: [OauthService]
})
export class OauthComponent implements OnInit {
  public model: any = {
    username: '',
    password: '',
    custnum: ''
  }
  constructor(private oauthService: OauthService, 
              private router: Router, 
              private sessionService: SessionService) { }

  ngOnInit() {
    
  }

  public signIn() {
    let username: string = this.model.username;
    let password: string = this.model.password;
    let custnum: string = this.model.custnum;

    this.oauthService.getAuthenticatedToken(username, password, custnum)
      .subscribe(response => {
        this.sessionService.set(response.access_token);
        this.router.navigate(['/scores']);
      });
  }

}
