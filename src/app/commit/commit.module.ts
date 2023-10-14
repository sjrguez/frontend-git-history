import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitComponent } from './commit.component';
import { CommitRoutingModule } from './commit-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    CommitComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbPagination,
    CommitRoutingModule
  ]
})
export class CommitModule { }
