import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-unidad-tiempo',
  templateUrl: './unidad-tiempo.component.html',
  styleUrls: ['./unidad-tiempo.component.css']
})
export class UnidadTiempoComponent implements OnInit {
  unidadTiempoForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.unidadTiempoForm = this.fb.group({
      txtCodigo: [],
      txtTiempo: []
    });
  }
}
