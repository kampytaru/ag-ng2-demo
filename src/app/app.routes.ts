import { provideRouter, RouterConfig } from '@angular/router';
import { SignInComponent, 
    ScoresComponent, 
    ScoreHistoryComponent, 
    AlertSettingsComponent,
    LogoutComponent } from './components/index';

const routes: RouterConfig = [
  { path: 'signin', component: SignInComponent },
  { path: 'scores', component: ScoresComponent },
  { path: 'score-history', component: ScoreHistoryComponent },
  { path: 'alert-settings', component: AlertSettingsComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: ScoresComponent }
];

export const RouterProviders = [
  provideRouter(routes)
];