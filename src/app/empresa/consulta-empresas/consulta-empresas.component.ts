import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/servicios/empresas.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
  ) { }

  ngOnInit(): void {
    this.consultarEmpresas();
  }

  public consultarEmpresas():void {
    this.empresaService.consultarEmpresas()
    .subscribe(data => {
      this.empresas = data.data;
      console.log('data', data.data);
      if (data.success == 'true') {
        this.spinner.hide();
        // this.alertMessage.alert('  Product created successfully');
        // this.addNewProductForm();    
      } else {
        this.spinner.hide();
        // this.alertMessage.alert('  Error while creating a product');
      }
    }, (err) => {
      this.spinner.hide();
      // this.alertMessage.alert('  Error while creating a product');

    });  
  }



}
