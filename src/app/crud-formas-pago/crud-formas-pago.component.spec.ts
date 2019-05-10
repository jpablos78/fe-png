import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFormasPagoComponent } from './crud-formas-pago.component';

describe('CrudFormasPagoComponent', () => {
  let component: CrudFormasPagoComponent;
  let fixture: ComponentFixture<CrudFormasPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudFormasPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFormasPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
