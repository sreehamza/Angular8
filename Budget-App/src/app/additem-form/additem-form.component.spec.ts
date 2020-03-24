import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemFormComponent } from './additem-form.component';

describe('AdditemFormComponent', () => {
  let component: AdditemFormComponent;
  let fixture: ComponentFixture<AdditemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
