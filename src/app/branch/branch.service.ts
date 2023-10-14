import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Branch } from './models/branch.model';
import { Observable } from 'rxjs';
import { URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private url = `${URL}/api/branch`
  constructor(private http: HttpClient) {}

  getAllBranches(): Observable<Branch[]> {
    return this.http.get<Branch[]>(this.url)
  }

  getBranchByName(name: string): Observable<Branch> {
    return this.http.get<Branch>(`${this.url}/${name}`)
  }
}
