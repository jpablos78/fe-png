import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesarDocumentosComponent } from './procesar-documentos.component';

describe('ProcesarDocumentosComponent', () => {
  let component: ProcesarDocumentosComponent;
  let fixture: ComponentFixture<ProcesarDocumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesarDocumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesarDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
