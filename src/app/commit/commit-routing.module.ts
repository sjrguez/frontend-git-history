import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitComponent } from './commit.component';


const routes: Routes = [
    { path: ':branchName', component: CommitComponent },
  ];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommitRoutingModule {}