import { Routes } from '@angular/router';
import { AgregarSintomasComponent } from './agregar-sintomas/agregar-sintomas.component';
import { ListarSintomasComponent} from './listar-sintomas/listar-sintomas.component';
import { ModificarSintomasComponent} from './modificar-sintomas/modificar-sintomas.component';

export const SintomasRoutes: Routes = [
    { path: 'add', component: AgregarSintomasComponent },
    { path: 'listar', component: ListarSintomasComponent},
    { path: 'modificar/:hash', component: ModificarSintomasComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'listar' }
];