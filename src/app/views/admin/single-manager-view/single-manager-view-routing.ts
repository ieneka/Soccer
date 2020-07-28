  
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SingleManagerViewComponent } from './single-manager-view.component';

const routes: Routes = [
  { path: '/admin/user',  component: SingleManagerViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomVirtualRoutingModule { }