import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVisitEditComponent } from './user-visit-edit.component';

describe('UserVisitEditComponent', () => {
  let component: UserVisitEditComponent;
  let fixture: ComponentFixture<UserVisitEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserVisitEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVisitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
