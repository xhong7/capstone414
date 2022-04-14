import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingformanagerComponent } from './postingformanager.component';

describe('PostingformanagerComponent', () => {
  let component: PostingformanagerComponent;
  let fixture: ComponentFixture<PostingformanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostingformanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingformanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
