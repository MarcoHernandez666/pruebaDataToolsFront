import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmpresaDto } from 'src/app/modelos/empresa.model';
import { EmpresasService } from 'src/app/servicios/empresas.service';
import { Alert } from '../../alert/alert';


@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.scss']
})
export class CrearEmpresaComponent implements OnInit { 
  
  constructor( 
    private builder: FormBuilder,
    private spinner: NgxSpinnerService,
    private empresaService: EmpresasService,
    private router: Router,
    private alertMessage: Alert
  ) { }

  public empresaForm: FormGroup;
  empresa : EmpresaDto;

  ngOnInit(): void {
    this.crearEmpresaForm();
  }

  public crearEmpresaForm(): void {
    this.empresaForm = this.builder.group({
      nombreEmpresa: ['', [Validators.required]],
      tipoIdentificacion: ['', [Validators.required]],
      numIdentificacion: ['', [Validators.required]],
      direccion: [''],
      ciudad: [''],
      departamento: ['',],
      pais: [''],
      telefono: [''],    

    });
  }

  get nombreEmpresaNoValid(): boolean {
    return this.empresaForm.get('nombreEmpresa').invalid && this.empresaForm.get('nombreEmpresa').touched;
  }

  get numeroIdentifiNoValid(): boolean {
    return this.empresaForm.get('numIdentificacion').invalid && this.empresaForm.get('numIdentificacion').touched;
  }

  get tipoIdentifiNoValid(): boolean {
    return this.empresaForm.get('tipoIdentificacion').invalid && this.empresaForm.get('tipoIdentificacion').touched;
  }

  get telNoValid(): boolean {
    return this.empresaForm.get('telefono').invalid && this.empresaForm.get('telefono').touched;
  }


  public save(): void {    
    this.spinner.show();    
    if (this.empresaForm.invalid) {
      this.spinner.hide();
      this.alertMessage.alert('Por favor complete los campos correctamente');
      return (Object as any).values(this.empresaForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
    }    
    const nombreEmpresa = this.empresaForm.get('nombreEmpresa').value;       
    this.empresa = {
      empresa : {
      nombre: this.empresaForm.get('nombreEmpresa').value,
      tipo: this.empresaForm.get('tipoIdentificacion').value,
      numIdent: this.empresaForm.get('numIdentificacion').value,
      direccion: this.empresaForm.get('direccion').value,
      ciudad: this.empresaForm.get('ciudad').value,
      departamento: this.empresaForm.get('departamento').value,
      pais: this.empresaForm.get('pais').value,
      tel: this.empresaForm.get('telefono').value
    }
    }       
    
      this.empresaService.agregarEmpresa(this.empresa)
        .subscribe(data => {
          if (data.success == 'true') {
            this.spinner.hide();
            this.alertMessage.alert(data.message);
            this.empresaForm.reset();   
          } else {
            this.spinner.hide();
            this.alertMessage.alert(data.message);
          }
        }, (err) => {
          this.spinner.hide();
          this.alertMessage.alert(err.message);

        });  

  }

  public clickConsultar():void {    
    this.router.navigate(['consultar']);
  }   

}
