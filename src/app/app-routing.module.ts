import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaEmpresasComponent } from './empresa/consulta-empresas/consulta-empresas.component';
import { CrearEmpresaComponent } from './empresa/crear-empresa/crear-empresa.component';

export const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
