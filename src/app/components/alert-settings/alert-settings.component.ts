import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertSettingsService, ApiService } from '../../services/index';
import { ALERT_SETTINGS } from '../../const/index';

@Component({
  moduleId: module.id,
  selector: 'app-alert-settings',
  templateUrl: 'alert-settings.component.html',
  styleUrls: ['alert-settings.component.css'],
  providers: [AlertSettingsService]
})
export class AlertSettingsComponent implements OnInit {
  public model: any = {
      "is_target_score_on": false,
      "current_score": 0,
      "target_score": 0,
      "is_score_point_change_on": false,
      "score_point_change_amount": 0,
      "is_risk_level_alert_on": false,
      "is_sign_in_reminder_on": false,  
      "reminder_type": -1,
      "reminder_date": null
  };
  public showMsg: boolean = false;
  public _ALERT_SETTINGS: any = ALERT_SETTINGS;
  public jsResponse: string;
  public jsPut: string;

  constructor(private alertSettingsService: AlertSettingsService, private router: Router) { }

  ngOnInit() {
    this.alertSettingsService.getSettings().subscribe(response => {
      this.model = response.score_alert_settings;
      this.jsResponse = JSON.stringify(response, undefined, 2);
    }, error => {
      this.router.navigate(['/signin']);
    });
  }

  submitChanges() {
    let body: any = {
      "target_score": this.model.target_score,
      "range_against_baseline": this.model.range_against_baseline,
      "target_score_alert": this.model.is_target_score_on,
      "baseline_score_alert": this.model.is_score_point_change_on,
      "risk_level_alert": this.model.is_risk_level_alert_on,
    } 


    this.alertSettingsService.putSettings(body).subscribe(response => {
      this.jsResponse = JSON.stringify(response, undefined, 2);
      this.jsPut = JSON.stringify(body, undefined, 2);
      this.showMsg = true;
    }, error => {
      this.router.navigate(['/oauth']);
    });
  }
}
