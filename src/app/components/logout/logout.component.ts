import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session/session.service';

@Component({
  moduleId: module.id,
  selector: 'app-logout',
  templateUrl: 'logout.component.html',
  styleUrls: ['logout.component.css']
})
export class LogoutComponent {

  constructor(private router: Router, private sessionService: SessionService) {
    this.sessionService.logout();
    console.log('Logout');
    this.router.navigate(['/signin']);
   }
}
