import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBoxHeaderComponent } from './profile-box-header.component';

describe('ProfileBoxHeaderComponent', () => {
  let component: ProfileBoxHeaderComponent;
  let fixture: ComponentFixture<ProfileBoxHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileBoxHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBoxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
