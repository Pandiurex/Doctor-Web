import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DiagnosticComponent } from './components/diagnostic/diagnostic.component';
import { TreatmentComponent } from './components/treatment/treatment.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SendEmailComponent } from './components/send-email/send-email.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'diagnostico', component: DiagnosticComponent },
  { path: 'tratamiento', component: TreatmentComponent },
  { path: 'registro', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'recovery', component: ForgotPasswordComponent },
  { path: 'emailSent', component: SendEmailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
