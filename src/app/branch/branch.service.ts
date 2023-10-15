import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL } from 'src/environments/environment';
import { BranchResponse,Branch } from './models';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private url = `${URL}/api/branch`
  constructor(private http: HttpClient) {}

  getAllBranches(page: number): Observable<BranchResponse> {
    return this.http.get<BranchResponse>(this.url, {
      params: {
        page
      }
    })
  }

  getBranchByName(name: string): Observable<Branch> {
    return this.http.get<Branch>(`${this.url}/${name}`)
  }
}
