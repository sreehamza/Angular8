import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskForServiceComponent } from './task-for-service.component';

describe('TaskForServiceComponent', () => {
  let component: TaskForServiceComponent;
  let fixture: ComponentFixture<TaskForServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskForServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskForServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
