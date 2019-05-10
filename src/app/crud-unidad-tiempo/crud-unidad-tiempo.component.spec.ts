import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUnidadTiempoComponent } from './crud-unidad-tiempo.component';

describe('CrudUnidadTiempoComponent', () => {
  let component: CrudUnidadTiempoComponent;
  let fixture: ComponentFixture<CrudUnidadTiempoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudUnidadTiempoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUnidadTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
