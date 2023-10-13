import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Branch } from './models/branch.model';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private url = 'http://localhost:5000/api/branch'
  constructor(private http: HttpClient) {}

  getAllBranches() {
    return this.http.get<Branch[]>(this.url)
  }
}
