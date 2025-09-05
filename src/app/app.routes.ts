import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './pages/privacy-policy.component';
import { TermsOfUseComponent } from './pages/terms-of-use.component';

export const routes: Routes = [
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-of-use', component: TermsOfUseComponent }
];
