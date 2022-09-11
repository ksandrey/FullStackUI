import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee: Employee = {} as Employee

  constructor(private employeesService: EmployeesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void 
  {
    this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        console.log(id);
        if (id != null) {
          this.employeesService.getEmployee(id).subscribe({
            next: (employee) => {
              this.employee = employee;
            }
          });
        }
    });
  }

  editEmployee(): void
  {
    this.employeesService.EditEmployee(this.employee).subscribe({
      next: (employee) => {
        //console.log(employee);
        this.router.navigate(['employees'])
      }
    });
  }

  deleteEmployee(): void
  {
    this.employeesService.DeleteEmployee(this.employee.id.toString()).subscribe({
      next: (employee) => {
        this.router.navigate(['employees'])
      }
    });
  }

}
