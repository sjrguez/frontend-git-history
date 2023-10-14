import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchRoutingModule } from './branch/branch-routing.module';
import { CommitRoutingModule } from './commit/commit-routing.module';

const routes: Routes = [
    { path: '', loadChildren: () => BranchRoutingModule },
    {path: "branch", loadChildren: () => CommitRoutingModule},
    { path: '**', redirectTo: '', pathMatch: 'full' },
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
