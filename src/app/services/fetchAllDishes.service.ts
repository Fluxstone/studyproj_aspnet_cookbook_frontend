// src/app/smoketest.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchAllDishesService {

  private apiUrl = 'http://localhost:5026/getAllDishes';

  constructor(private http: HttpClient) { }

  getAllDishes(): Observable<any> {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}