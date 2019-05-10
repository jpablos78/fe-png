import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../services/consulta.service';
import IFormasPago from '../services/IFormasPago';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-crud-formas-pago',
  templateUrl: './crud-formas-pago.component.html',
  styleUrls: ['./crud-formas-pago.component.css']
})
export class CrudFormasPagoComponent implements OnInit {
  public errorMsg;
  displayDialog: boolean;
  displayError: boolean;
  nuevoRegistro: boolean;
  formasPago: IFormasPago[];
  formaPago: IFormasPago = {};
  cols: any[];
  itemsButton: MenuItem[];

  constructor(
    private consultaService: ConsultaService
  ) { }

  ngOnInit() {
    this.consultaService.getFormasPago().subscribe(
      data => {
        // alert(data.success);
        this.formasPago = data;
        console.log(this.formasPago);
      },
      error => {
        this.errorMsg = error;
        console.log('Error 1: ' + this.errorMsg);
        // alert(this.errorMsg);
        this.displayError = true;
      }
    );

    this.itemsButton = [
      {
        label: 'Solo Procesar',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Solo enviar mail',
        icon: 'pi pi-times'
      }
    ];

    this.cols = [
      {
        field: 'codigo',
        header: 'Codigo',
        width: '15%'
      },
      {
        field: 'forma_pago',
        header: 'Forma de Pago',
        width: '30%'
      },
      {
        field: 'fecha_inicio',
        header: 'Fecha de Inicio',
        width: '20%'
      },
      {
        field: 'fecha_fin',
        header: 'Fecha de Fin',
        width: '15%'
      },
      {
        field: 'estado',
        header: 'Estado',
        width: '13%'
      }
    ];
  }

  showDialogToAdd() {
    this.nuevoRegistro = true;
    this.displayDialog = true;
    this.formaPago = {};
  }

  modificarRegistro(formaPago: IFormasPago) {
    this.nuevoRegistro = false;
    alert(formaPago.codigo);
    this.formaPago = this.cloneRegistro(formaPago);
    alert(this.formaPago.forma_pago);
    this.displayDialog = true;
  }

  cloneRegistro(c: IFormasPago): IFormasPago {
    const formaPago = {};
    for (const prop in c) {
      if (c) {
        formaPago[prop] = c[prop];
      }

    }
    return formaPago;
  }
}
