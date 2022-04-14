import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantspageComponent } from './applicantspage.component';

describe('ApplicantspageComponent', () => {
  let component: ApplicantspageComponent;
  let fixture: ComponentFixture<ApplicantspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
