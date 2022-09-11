import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  //employees: Employee[] = [];
  employees$!: Observable<Employee[]>;

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employees$ = this.employeesService.getAllEmployees();
    
    // this.employeesService.getAllEmployees()
    // .subscribe({
    //   next: (employees) => {
    //     this.employees = employees;
    //   },
    //   error: (responce) => {
    //     console.log(responce);
    //   }
    // })
  }

  editEmployee() {
    alert('AAA');
  }

}
