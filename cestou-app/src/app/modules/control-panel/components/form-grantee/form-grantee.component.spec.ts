import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGranteeComponent } from './form-grantee.component';

describe('FormGranteeComponent', () => {
  let component: FormGranteeComponent;
  let fixture: ComponentFixture<FormGranteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGranteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGranteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
