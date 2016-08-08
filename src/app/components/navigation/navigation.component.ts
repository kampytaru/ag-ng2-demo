import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SessionService } from '../../services/index';

@Component({
  moduleId: module.id,
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavigationComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit() {

  }

}
