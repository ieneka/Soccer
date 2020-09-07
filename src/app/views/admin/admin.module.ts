import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/* ngx-bootstrap */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


/* modules & components */
import { AdminRoutingModule } from './admin-routing.module';
import { UserListComponentComponent } from './managers-view/user-list-component/user-list-component.component';
import { ManagersViewComponent } from './managers-view/managers-view.component';
import { ManagerInfoComponent } from './single-manager-view/manager-info/manager-info.component';
import { SingleManagerViewComponent } from './single-manager-view/single-manager-view.component';


@NgModule({
    declarations: [
        UserListComponentComponent,
        ManagersViewComponent,
        ManagerInfoComponent,
        SingleManagerViewComponent
    ],
    imports: [
      CommonModule,
      AdminRoutingModule,
      NgbModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
  export class AdminModule { }
  