import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlerComponent } from './form-controler.component';

describe('FormControlerComponent', () => {
  let component: FormControlerComponent;
  let fixture: ComponentFixture<FormControlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
