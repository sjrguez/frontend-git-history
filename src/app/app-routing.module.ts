import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchRoutingModule } from './branch/branch-routing.module';

const routes: Routes = [
    { path: '', loadChildren: () => BranchRoutingModule },
    { path: '**', redirectTo: '', pathMatch: 'full' },
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
