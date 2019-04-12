import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadTiempoComponent } from './unidad-tiempo.component';

describe('UnidadTiempoComponent', () => {
  let component: UnidadTiempoComponent;
  let fixture: ComponentFixture<UnidadTiempoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadTiempoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
