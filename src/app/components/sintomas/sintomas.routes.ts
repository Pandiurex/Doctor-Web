import { Routes } from '@angular/router';
import { AgregarSintomasComponent } from './agregar-sintomas/agregar-sintomas.component';
import { BorrarSintomasComponent } from './borrar-sintomas/borrar-sintomas.component';
import { ModificarSintomasComponent } from './modificar-sintomas/modificar-sintomas.component';


export const SintomasRoutes: Routes = [
    { path: 'add', component: AgregarSintomasComponent },
    { path: 'delete', component: BorrarSintomasComponent },
    { path: 'modify', component: ModificarSintomasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'add' }
];