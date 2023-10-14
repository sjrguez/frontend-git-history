import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commit } from './models/commit.model';
import { Observable } from 'rxjs';
import { URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommitService {
  private url = `${URL}/api/commit/branch`
  constructor(private http: HttpClient) { }

  getAllCommits(branchSha: string): Observable<Commit[]> {
    return this.http.get<Commit[]>(`${this.url}/${branchSha}`)
  }


}
