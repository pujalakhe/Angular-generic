import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee-model';
import { ActivatedRoute } from '@angular/router';
import { MOCK_EMPLOYEES } from '../../mock-employee';

@Component({
  selector: 'app-employee-detail-component',
  standalone: false,
  templateUrl: './employee-detail-component.html',
  styleUrl: './employee-detail-component.scss',
})
export class EmployeeDetailComponent implements OnInit {
  employee?: Employee;
  loading = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.employee = MOCK_EMPLOYEES.find((emp) => emp.id === id);
  }
}
