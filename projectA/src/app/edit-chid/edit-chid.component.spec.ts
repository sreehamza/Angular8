import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChidComponent } from './edit-chid.component';

describe('EditChidComponent', () => {
  let component: EditChidComponent;
  let fixture: ComponentFixture<EditChidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
