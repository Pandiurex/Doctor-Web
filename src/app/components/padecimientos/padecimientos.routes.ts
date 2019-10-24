import { Routes } from '@angular/router';
import { AgregarPadecimientosComponent } from './agregar-padecimientos/agregar-padecimientos.component';
import { ListarPadecimientosComponent} from './listar-padecimientos/listar-padecimientos.component';
import { ModificarPadecimientosComponent} from './modificar-padecimientos/modificar-padecimientos.component';

export const PadecimientosRoutes: Routes = [
    { path: 'add', component: AgregarPadecimientosComponent },
    { path: 'listar', component: ListarPadecimientosComponent},
    { path: 'modificar/:hash', component: ModificarPadecimientosComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'listar' }
];