import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BranchService } from '../branch/branch.service';
import { faSpinner,faEye,  } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Branch } from '../branch/models/branch.model';
import { CommitService } from './commit.service';
import { Commit } from './models/commit.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css']
})
export class CommitComponent implements OnInit, OnDestroy {
  public faSpinner = faSpinner
  public faEye = faEye
  public faGithub = faGithub;
  public branchName = '';

  public loadingBranch = false;
  public loadingCommits = false;

  public errorInfo: any
  public branchInfo?: Branch
  public commits: Commit[] = []

  private subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, private branchService: BranchService, private commitService: CommitService){}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        const branchName = params.get('branchName');
        this.branchName = branchName ?? '';
        this.getBranchByName(this.branchName)
      });
  }

  getBranchByName(name: string) {
    this.loadingBranch = true;
    const subs = this.branchService.getBranchByName(name).subscribe((branch) => {
      this.branchInfo = branch 
      this.loadingBranch = false;
      this.getAllCommits(branch.sha)
    }, ({error}) => {
      this.errorInfo = error
      this.loadingBranch = false;
    })
    this.subscriptions.push(subs)
  }


  getAllCommits(branchSha: string) {
    this.loadingCommits = true;
    const subs = this.commitService.getAllCommits(branchSha).subscribe(commits => {
      this.loadingCommits = false;
      this.commits = commits;

    }, ({error}) => {
      this.errorInfo = error
      this.loadingCommits = false;
    })
    this.subscriptions.push(subs)
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }


}
