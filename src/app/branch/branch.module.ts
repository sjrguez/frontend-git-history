import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch.component';
import { BranchRoutingModule } from './branch-routing.module';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    BranchComponent
  ],
  imports: [
    CommonModule,
    NgbPagination,
    BranchRoutingModule,
    FontAwesomeModule
  ]
})
export class BranchModule { }
