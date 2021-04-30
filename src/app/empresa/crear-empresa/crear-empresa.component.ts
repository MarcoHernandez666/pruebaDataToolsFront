import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmpresaDto } from 'src/app/modelos/empresa.model';
import { EmpresasService } from 'src/app/servicios/empresas.service';
// import { Alert } from '../alert/alert';


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
  ) { }

  public empresaForm: FormGroup;
  empresa : EmpresaDto;

  ngOnInit(): void {
    this.crearEmpresaForm();
  }

  public crearEmpresaForm(): void {
    this.empresaForm = this.builder.group({
      nombreEmpresa: ['', [Validators.required, Validators.pattern('([A-Za-z0-9ñÑáéíóúÁÉÍÓÚ])(.+)?'), Validators.maxLength(50)]],
      tipoIdentificacion: ['', [Validators.required, Validators.minLength(20)]],
      numIdentificacion: ['', [Validators.required]],
      direccion: [''],
      ciudad: [''],
      departamento: ['', [Validators.required]],
      pais: [''],
      telefono: ['', [Validators.max(100), Validators.min(0), Validators.pattern('([0-9]){1,3}')]],    

    });
  }

  get nombreEmpresaNoValid(): boolean {
    return this.empresaForm.get('nombreEmpresa').invalid && this.empresaForm.get('nombreEmpresa').touched;
  }

  get numeroIdentifiNoValid(): boolean {
    return this.empresaForm.get('numIdentificacion').invalid && this.empresaForm.get('numIdentificacion').touched;
  }

  public save(): void {
    console.log('ingresa a save');
    this.spinner.show();    
    // if (this.empresaForm.invalid) {
    //   this.spinner.hide();
    //   // this.alertMessage.alert('Por favor complete los campos correctamente');
    //   return (Object as any).values(this.empresaForm.controls).forEach(control => {
    //     control.markAllAsTouched();
    //   });
    // }
    console.log('ingresa a save');
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
        
    console.log('this.empresa',this.empresa);
      this.empresaService.agregarEmpresa(this.empresa)
        .subscribe(data => {
          if (data.success == 'true') {
            this.spinner.hide();
            // this.alertMessage.alert('  Product created successfully');
            this.empresaForm.reset();   
          } else {
            this.spinner.hide();
            // this.alertMessage.alert('  Error while creating a product');
          }
        }, (err) => {
          this.spinner.hide();
          // this.alertMessage.alert('  Error while creating a product');

        });  

  }

  public clickConsultar():void {    
    this.router.navigate(['consultar']);
  }   

}
