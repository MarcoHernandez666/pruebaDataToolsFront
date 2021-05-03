import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaModule } from './empresa/empresa.module';
import { CrearEmpresaComponent } from './empresa/crear-empresa/crear-empresa.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {RutasModule} from "./empresa/rutas/rutas.module";
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent      
   
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    EmpresaModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    RouterModule,
    RutasModule,
    NgbAlertModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
