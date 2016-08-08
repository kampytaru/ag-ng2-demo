import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreHistoryService, ApiService } from '../../services/index';

@Component({
  moduleId: module.id,
  selector: 'app-score-history',
  templateUrl: 'score-history.component.html',
  styleUrls: ['score-history.component.css'],
  providers: [ScoreHistoryService]
})
export class ScoreHistoryComponent implements OnInit {
  public score_history: any;
  public jsResponse: string;

  constructor(private ScoreHistoryService: ScoreHistoryService, private router: Router) { }

  ngOnInit() {
    this.ScoreHistoryService.getScoreHistory().subscribe(response => {
      this.score_history = response;
      this.jsResponse = JSON.stringify(response, undefined, 2);
    }, error => {
      this.router.navigate(['/signin']);
    });
  }
}
