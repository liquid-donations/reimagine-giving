import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendInputComponent } from './friend-input.component';

describe('FriendInputComponent', () => {
  let component: FriendInputComponent;
  let fixture: ComponentFixture<FriendInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
