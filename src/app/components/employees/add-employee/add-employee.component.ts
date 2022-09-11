import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  // newEmployee: Employee = {
  //   id: 0,
  //   name: '',
  //   email: '',
  //   phone: 0,
  //   salary: 0,
  //   department: ''
  // };

  newEmployee: Employee = {} as Employee

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
  }

  addEmployee(): void
  {
    this.employeesService.AddEmployee(this.newEmployee).subscribe({
      next: (employee) => {
        console.log(employee);
      }
    });
  }

}
