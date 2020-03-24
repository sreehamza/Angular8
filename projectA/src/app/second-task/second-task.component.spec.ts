import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTaskComponent } from './second-task.component';

describe('SecondTaskComponent', () => {
  let component: SecondTaskComponent;
  let fixture: ComponentFixture<SecondTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
