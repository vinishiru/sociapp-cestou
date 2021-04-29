import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonInfoComponent } from './form-person-info.component';

describe('FormUserInfoComponent', () => {
  let component: FormPersonInfoComponent;
  let fixture: ComponentFixture<FormPersonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPersonInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPersonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
