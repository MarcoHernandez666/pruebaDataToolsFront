import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearEmpresaComponent } from './crear-empresa/crear-empresa.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ConsultaEmpresasComponent } from './consulta-empresas/consulta-empresas.component';



@NgModule({
  declarations: [CrearEmpresaComponent, ConsultaEmpresasComponent],
  imports: [
    CommonModule,   
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgbAlertModule,
    FormsModule,    
  ],
  exports:[
    CrearEmpresaComponent,
    ConsultaEmpresasComponent
  ]
})
export class EmpresaModule { }
