import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})

export class ParametrosComponent implements OnInit {
  cities: City[];
  selectedCity: any;
  value: Date;
  parametrosForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.cities = [
      { name: 'Globaltex', code: '008' },
      { name: 'Texfashion', code: '009' },
      { name: 'Passarela', code: '012' }
    ];
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.parametrosForm = this.fb.group({
      cmbEmpresa: [],
      dateCalendar: [],
      txtRutaGenerados: [],
      txtRutaFirmados: [],
      txtRutaEnviados: [],
      txtRutaEnviadosRechazados: [],
      txtRutaAutorizados: [],
      txtRutaNoAutorizados: [],
      txtRutaPdf: [],
      txtRutaLogo: [],
      txtRutaCertificado: [],
      txtClaveCertificado: [],
      txtMailDefault: [],
      txtObligadoContabilidad: []
    });
  }

}
