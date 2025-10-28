import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  private employeeUrl = 'http://localhost:3000/employees';
  constructor(private httpClient: HttpClient) {}

  addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.employeeUrl, employee);
  }
}
