import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagersViewComponent } from './managers-view/managers-view.component';
import { SingleManagerViewComponent } from './single-manager-view/single-manager-view.component';

const routes: Routes = [
  { path: 'admin/users',  component: ManagersViewComponent },
  { path: 'admin/user/:id', component: SingleManagerViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
