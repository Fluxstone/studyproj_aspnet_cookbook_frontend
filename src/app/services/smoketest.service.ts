// src/app/smoketest.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmoketestService {

  private apiUrl = 'http://localhost:5026/debug/smoketest';

  constructor(private http: HttpClient) { }

  getSmoketest(): Observable<any> {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}