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
import { SintomasComponent } from './components/sintomas/sintomas.component';
import { PadecimientosComponent } from './components/padecimientos/padecimientos.component';
import { PadecimientosRoutes } from './components/padecimientos/padecimientos.routes';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { SintomasRoutes } from './components/sintomas/sintomas.routes';
import { VerificacionComponent}  from './components/verificacion/verificacion.component';
import { ResetPasswordComponent} from './components/reset-password/reset-password.component';
import { UsuarioInfoComponent} from './components/usuario/usuarioInfo/usuarioInfo.component';
import { BDCComponent } from './components/bdc/bdc.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'diagnostico', component: DiagnosticComponent },
  { path: 'tratamiento', component: TreatmentComponent },
  { path: 'registro', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'faq', component: FaqComponent },
  { 
  path: 'sintomas',
  component: SintomasComponent,
  children: SintomasRoutes
  },
  { 
    path: 'padecimientos', 
    component: PadecimientosComponent , 
    children: PadecimientosRoutes
  },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'recovery', component: ForgotPasswordComponent },
  { path: 'emailSent', component: SendEmailComponent },
  { path: 'verificacion/:hash', component : VerificacionComponent},
  { path: 'recuperar/:hash', component : ResetPasswordComponent},
  { path: 'usuarios/info/:id', component : UsuarioInfoComponent},
  { path: 'bdc', component : BDCComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
