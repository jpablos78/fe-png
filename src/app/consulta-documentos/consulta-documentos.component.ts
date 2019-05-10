import { Component, OnInit } from '@angular/core';
import IConsultas from '../services/IConsulta';
import { ConsultaService } from '../services/consulta.service';

@Component({
  selector: 'app-consulta-documentos',
  templateUrl: './consulta-documentos.component.html',
  styleUrls: ['./consulta-documentos.component.css']
})
export class ConsultaDocumentosComponent implements OnInit {
  consultas: IConsultas[];
  consultas2: IConsultas[];

  consulta: IConsultas;
  // consulta2: any;
  // consulta = [];

  constructor(
    private consultaService: ConsultaService
  ) { }

  ngOnInit() {
    /* // FORMA 1 FUNCIONA
        this.consultaService.getDocumentos().subscribe(
          (res: any[]) => {
            this.consultas2 = res;
            console.log(res);
            console.log(this.consultas2);
          }
        );
    */

    /* // FORMA 2 FUNCIONA
        this.consultaService.getDocumentos().subscribe(
          (consultas2: any) => this.consultas2 = consultas2
        );
    */

    // FORMA 3 FUNCIONA
    this.consultaService.getDocumentos().subscribe(
      data => {
        this.consultas2 = data;
      }
    );

    // FORMA CON PROMISE FUNCIONA
    // this.consultaService.getConsulta().then(consultas => this.consultas = consultas);
  }

  selectConsulta(consulta: IConsultas) {
    alert(consulta.empresa);
  }
}
