import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { EmployeeComponent } from './employee/employee.component';
import { HightDirective } from './hight.directive';
import { SreenathDirective } from './sreenath.directive';
import { ImageComponent } from './image/image.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FirsttaskComponent } from './firsttask/firsttask.component';
import { EditChidComponent } from './edit-chid/edit-chid.component';
import { SecondTaskComponent } from './second-task/second-task.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { FormControlerComponent } from './form-controler/form-controler.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupComponent } from './form-group/form-group.component';
import { ServiceTaskComponent } from './service-task/service-task.component';
import { TaskForServiceComponent } from './task-for-service/task-for-service.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    EmployeeComponent,
    HightDirective,
    SreenathDirective,
    ImageComponent,
    TwowaybindingComponent,
    FirsttaskComponent,
    EditChidComponent,
    SecondTaskComponent,
    SecondChildComponent,
    FormControlerComponent,
    FormGroupComponent,
    ServiceTaskComponent,
    TaskForServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
