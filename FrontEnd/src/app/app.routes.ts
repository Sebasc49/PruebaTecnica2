import { Routes } from '@angular/router';
import { FormDepartamentosComponent } from './Paginas/form-departamentos/form-departamentos.component';
import { FormEmpleadosComponent } from './Paginas/form-empleados/form-empleados.component';

export const routes: Routes = [
    {path: 'departamentos', component: FormDepartamentosComponent, title: 'Departamentos'},
    {path: 'empleados', component: FormEmpleadosComponent, title: 'Empleados'}
];