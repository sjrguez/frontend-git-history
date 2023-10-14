import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BranchModule } from './branch/branch.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommitModule } from './commit/commit.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BranchModule,
    FontAwesomeModule,
    CommitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
