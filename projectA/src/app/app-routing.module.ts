import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirsttaskComponent } from './firsttask/firsttask.component';
import { ImageComponent } from './image/image.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { SecondTaskComponent } from './second-task/second-task.component';
import { FormControlerComponent } from './form-controler/form-controler.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { ServiceTaskComponent } from './service-task/service-task.component';


const routes: Routes = [{path:'viewtable', component: FirsttaskComponent},
{path:'image', component: ImageComponent},
{path:'twoway', component: TwowaybindingComponent},
{path:'second', component: SecondTaskComponent},
{path:'service', component:ServiceTaskComponent},
// {path:'', component: TwowaybindingComponent},

{path:'forms', component: FormControlerComponent},
{path:'formgroup', component:FormGroupComponent},
{path:'', redirectTo: '/viewtable', pathMatch: 'full'},
{path:'**', redirectTo: '/image'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
