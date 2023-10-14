import { Component, OnInit } from '@angular/core';
import { BranchService } from './branch.service';
import { faXmark, faCheck, faEye, faTruckLoading, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Branch } from './models/branch.model';

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
  public branches: Branch[] = [];

  public errorInfo: any
  loading = false;

  constructor(private branchService: BranchService){}

  ngOnInit(): void {
    this.getAllBranches().then()
  }

  async getAllBranches() {
    this.loading = true
    this.branchService.getAllBranches().subscribe((branches) => {
      this.branches = branches;
      this.loading = false; 
    }, ({error}) => {
      this.loading = false
      this.errorInfo = error;
    })
  }
}
