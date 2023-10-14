import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Branch } from './models/branch.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private url = 'http://localhost:5000/api/branch'
  constructor(private http: HttpClient) {}

  getAllBranches(): Observable<Branch[]> {
    return this.http.get<Branch[]>(this.url)
  }

  getBranchByName(name: string): Observable<Branch> {
    return this.http.get<Branch>(`${this.url}/${name}`)
  }
}
