import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../services/consulta.service';
import IUnidadTiempo from '../services/IUnidadTiempo';

@Component({
  selector: 'app-crud-unidad-tiempo',
  templateUrl: './crud-unidad-tiempo.component.html',
  styleUrls: ['./crud-unidad-tiempo.component.css']
})
export class CrudUnidadTiempoComponent implements OnInit {
  displayDialog: boolean;
  unidadesTiempo: IUnidadTiempo[];
  unidadTiempo: IUnidadTiempo = {};
  cols: any[];
  nuevoRegistro: boolean;

  constructor(
    private consultaService: ConsultaService
  ) { }

  ngOnInit() {
    this.consultaService.getUnidadesTiempo().subscribe(
      data => {
        this.unidadesTiempo = data;
        console.log(this.unidadesTiempo);
      }
    );

    this.cols = [
      {
        field: 'codigo',
        header: 'Codigo',
        width: '20%'
      },
      {
        field: 'tiempo',
        header: 'Tiempo',
        width: '60%'
      }
      /*{
        field: '',
        header: '',
        width: '20%'
      }*/
    ];
  }

  modificarRegistro(unidadTiempo: IUnidadTiempo) {
    this.nuevoRegistro = false;
    alert(unidadTiempo.codigo);
    this.unidadTiempo = this.cloneRegistro(unidadTiempo);
    alert(this.unidadTiempo.tiempo);
    this.displayDialog = true;
  }

  showDialogToAdd() {
    this.nuevoRegistro = true;
    this.displayDialog = true;
    this.unidadTiempo = {};
  }

  cloneRegistro(c: IUnidadTiempo): IUnidadTiempo {
    const unidadTiempo = {};
    for (const prop in c) {
      if (c) {
        unidadTiempo[prop] = c[prop];
      }

    }
    return unidadTiempo;
  }
}
