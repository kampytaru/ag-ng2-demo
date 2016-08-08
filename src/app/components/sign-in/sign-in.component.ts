import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OauthService, ApiService, SessionService } from '../../services/index';

@Component({
  moduleId: module.id,
  selector: 'app-sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.css'],
  providers: [OauthService]
})
export class SignInComponent implements OnInit {

  public model: any = {
    username: '',
    password: '',
    custnum: '',
    delay: false,
    showMsg: false
  }
  public jsResponse: string;
  public jsPost: string;

  constructor(private oauthService: OauthService, 
              private router: Router, 
              private sessionService: SessionService) { }

  ngOnInit() {
    
  }

  public signIn() {
    let username: string = this.model.username;
    let password: string = this.model.password;
    let custnum: string = this.model.custnum;
    let router = this.router;
    let body = "grant_type=password";
        body += "&username=" + username + "/" + encodeURIComponent(password);
        body += "&password=" + custnum;

    this.jsPost = body;
    this.oauthService.getAuthenticatedToken(username, password, custnum)
      .subscribe(response => {
        this.jsResponse = JSON.stringify(response, undefined, 2);
        this.sessionService.set(response.access_token);
        this.model.showMsg = false;
        setTimeout(function() {
          router.navigate(['/scores']);
        }, (this.model.delay ? 15000 : 0));
      }, error => {
        this.model.showMsg = true;
      });
  }

}
