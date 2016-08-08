import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoresService, ApiService } from '../../services/index';

@Component({
  moduleId: module.id,
  selector: 'app-scores',
  templateUrl: 'scores.component.html',
  styleUrls: ['scores.component.css'],
  providers: [ScoresService]
})
export class ScoresComponent implements OnInit {
  public scores: any;
  public jsResponse: string;

  constructor(private scoresService: ScoresService, private router: Router) { }

  ngOnInit() {
    this.scoresService.getScores().subscribe(response => {
      this.scores = response;
      this.jsResponse = (JSON.stringify(response, undefined, 2)).trim();
    }, error => {
      this.router.navigate(['/signin']);
    });
  }

}
