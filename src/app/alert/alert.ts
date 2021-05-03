import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class Alert {
    constructor() { }

    alert(message): void {
        Swal.fire({
            title: 'Empresas',
            text: message,            
            confirmButtonText: 'Aceptar',
            confirmButtonColor: ' #ebd221',
        });
    }

    confirm(message) {
        return new Promise((resolve) => {
            Swal.fire({
                title: 'Empresas',
                text: message,                
                confirmButtonText: 'Aceptar',
                confirmButtonColor: ' #ebd221',
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
                cancelButtonColor: 'grey'
            }).then((resp) => {
                if (resp.isConfirmed) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        });
    }
}
