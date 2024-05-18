import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityDetailComponent } from './speciality-detail.component';

describe('SpecialityDetailComponent', () => {
  let component: SpecialityDetailComponent;
  let fixture: ComponentFixture<SpecialityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialityDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
