import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpresaComponent } from '../crear-empresa/crear-empresa.component';
import { ConsultaEmpresasComponent } from '../consulta-empresas/consulta-empresas.component';
const rutas: Routes = [
  { path: 'crear', component: CrearEmpresaComponent },
  { path: 'consultar', component: ConsultaEmpresasComponent },
 { path: '',   redirectTo: '/crear', pathMatch: 'full' },
];
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      rutas,
      { enableTracing: false } 
    )
  ],
  declarations: [],
  exports :[
    RouterModule
  ],
})
export class RutasModule {
 
 }