import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/Employee');
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseApiUrl + '/api/Employee/' + id);
  }

  AddEmployee(newEmployee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseApiUrl + '/api/Employee', newEmployee);
  }

  EditEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseApiUrl + '/api/Employee/' + employee.id, employee);
  }

  DeleteEmployee(id: number|string): Observable<Employee> {
    return this.http.delete<Employee>(this.baseApiUrl + '/api/Employee/' + id);
  }

}
