import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLicenceComponent } from './detail-licence.component';

describe('DetailLicenceComponent', () => {
  let component: DetailLicenceComponent;
  let fixture: ComponentFixture<DetailLicenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailLicenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
