import { Component, OnInit } from '@angular/core';
import { BranchService } from './branch.service';
import { faXmark, faCheck, faEye, faTruckLoading, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Branch } from './models';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  public faXmark = faXmark
  public faCheck = faCheck
  public faEye = faEye
  public faTruckLoading = faTruckLoading
  public faSpinner = faSpinner
  public faGithub = faGithub;

  public branches: Branch[] = [];
  public totalItems = 0
  public pageSize = 10
  public page = 1

  public errorInfo: any
  loading = false;

  constructor(private branchService: BranchService){}

  ngOnInit(): void {
    this.getAllBranches().then()
  }

  async getAllBranches(page = 1) {
    this.loading = true
    this.branchService.getAllBranches(page).subscribe((branches) => {
      this.branches = branches.data;
      this.totalItems = branches.totalItems
      this.loading = false; 
    }, ({error}) => {
      this.loading = false
      this.errorInfo = error;
    })
  }

  pageChanged(page: number) {
    this.getAllBranches(page)
  }

}
