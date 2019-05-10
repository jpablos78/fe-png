import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../services/consulta.service';
import IProcesar from '../services/IProcesar';


@Component({
  selector: 'app-procesar-documentos',
  templateUrl: './procesar-documentos.component.html',
  styleUrls: ['./procesar-documentos.component.css']
})
export class ProcesarDocumentosComponent implements OnInit {
  documentos: IProcesar[];
  cols: any[];
  selectedCars3: IProcesar[];

  constructor(
    private consultaService: ConsultaService
  ) { }

  ngOnInit() {
    this.consultaService.getDocumentosProcesar().subscribe(
      data => {
        this.documentos = data;
        console.log(this.documentos);
      }
    );

    this.cols = [
      {
        field: 'empresa',
        header: 'Empresa',
        width: '20%'
      },
      {
        field: 'tipo',
        header: 'Tipo',
        width: '20%'
      },
      {
        field: 'cliente',
        header: 'Cliente',
        width: '20%'
      },
      {
        field: 'documento',
        header: 'Documento',
        width: '20%'
      },
      {
        field: 'fecha',
        header: 'Fecha',
        width: '20%'
      }
    ];
  }

}
