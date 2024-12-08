import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLibrosComponent } from './menu-libros.component';

describe('MenuLibrosComponent', () => {
  let component: MenuLibrosComponent;
  let fixture: ComponentFixture<MenuLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuLibrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
