import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/servicios/empresas.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Alert } from '../../alert/alert';

@Component({
  selector: 'app-consulta-empresas',
  templateUrl: './consulta-empresas.component.html',
  styleUrls: ['./consulta-empresas.component.scss']
})
export class ConsultaEmpresasComponent implements OnInit {

  public empresas: Array<any> = [];
  p: any = 1;

  constructor(    
    private empresaService: EmpresasService,
    private spinner: NgxSpinnerService,
    private alertMessage: Alert
  ) { }

  ngOnInit(): void {
    this.consultarEmpresas();
  }

  public consultarEmpresas():void {
    this.empresaService.consultarEmpresas()
    .subscribe(data => {
      this.empresas = data.data;     
      if (data.success == 'true') {
        this.spinner.hide();
        this.alertMessage.alert(data.message);        
      } else {
        this.spinner.hide();
        this.alertMessage.alert(data.message);
      }
    }, (err) => {
      this.spinner.hide();
      this.alertMessage.alert(err.message);

    });  
  }



}
