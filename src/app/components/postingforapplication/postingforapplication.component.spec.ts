import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingforapplicationComponent } from './postingforapplication.component';

describe('PostingforapplicationComponent', () => {
  let component: PostingforapplicationComponent;
  let fixture: ComponentFixture<PostingforapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostingforapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingforapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
