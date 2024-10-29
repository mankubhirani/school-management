// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from '../../url/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  register(userData: any): Observable<any> {
    return this.http.post<any>(this.config.registerUrl, userData);
  }
}
