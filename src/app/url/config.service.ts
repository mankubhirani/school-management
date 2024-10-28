import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // Base API URL
  public readonly baseUrl = 'http://localhost:3000/api';

  // Module-specific Endpoints
  public readonly attendanceUrl = `${this.baseUrl}/attendance`;
  public readonly studentsUrl = `${this.baseUrl}/students`;
  public readonly teachersUrl = `${this.baseUrl}/teachers`;
  public readonly classesUrl = `${this.baseUrl}/classes`;
  public readonly subjectsUrl = `${this.baseUrl}/subjects`;

  constructor() {}
}
