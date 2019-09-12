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
import { SintomasComponent } from './components/sintomas/sintomas.component';
import { PadecimientosComponent } from './components/padecimientos/padecimientos.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { BorrarSintomasComponent } from './components/sintomas/borrar-sintomas/borrar-sintomas.component';
import { ModificarSintomasComponent } from './components/sintomas/modificar-sintomas/modificar-sintomas.component';
import { AgregarSintomasComponent } from './components/sintomas/agregar-sintomas/agregar-sintomas.component';
import { VerificacionComponent } from './components/verificacion/verificacion.component';
import { ResetPasswordComponent} from './components/reset-password/reset-password.component';
import { OwlModule } from 'ngx-owl-carousel';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    SendEmailComponent,
    SintomasComponent,
    PadecimientosComponent,
    UsuarioComponent,
    BorrarSintomasComponent,
    ModificarSintomasComponent,
    AgregarSintomasComponent,
    VerificacionComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    OwlModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
