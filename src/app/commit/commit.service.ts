import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from 'src/environments/environment';
import { CommitResponse } from './models';

@Injectable({
  providedIn: 'root'
})
export class CommitService {
  private url = `${URL}/api/commit/branch`
  constructor(private http: HttpClient) { }

  getAllCommits(branchSha: string, page: number): Observable<CommitResponse> {
    return this.http.get<CommitResponse>(`${this.url}/${branchSha}`, {
      params: {
        page
      }
    })
  }
}
