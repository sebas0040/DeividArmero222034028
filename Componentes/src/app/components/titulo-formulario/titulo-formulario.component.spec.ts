import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloFormularioComponent } from './titulo-formulario.component';

describe('TituloFormularioComponent', () => {
  let component: TituloFormularioComponent;
  let fixture: ComponentFixture<TituloFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
