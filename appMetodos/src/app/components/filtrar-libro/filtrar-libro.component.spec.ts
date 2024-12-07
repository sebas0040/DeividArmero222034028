import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarLibroComponent } from './filtrar-libro.component';

describe('FiltrarLibroComponent', () => {
  let component: FiltrarLibroComponent;
  let fixture: ComponentFixture<FiltrarLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrarLibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
