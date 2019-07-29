import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DiagnosticComponent } from './components/diagnostic/diagnostic.component';
import { TreatmentComponent } from './components/treatment/treatment.component';
import { AboutComponent } from './components/about/about.component';
import { SignupComponent } from './components/signup/signup.component';
import { FaqComponent } from './components/faq/faq.component';
import { FirstLetterPipe } from './pipes/first-letter.pipe';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SendEmailComponent } from './components/send-email/send-email.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DiagnosticComponent,
    TreatmentComponent,
    AboutComponent,
    SignupComponent,
    FaqComponent,
    FirstLetterPipe,
    LoginComponent,
    ForgotPasswordComponent,
    SendEmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
