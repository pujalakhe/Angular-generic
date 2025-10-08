import { Component } from '@angular/core';

interface Employee {
  id: number;
  name: string;
}
@Component({
  selector: 'app-attendance-list-component',
  standalone: false,
  templateUrl: './attendance-list-component.html',
  styleUrl: './attendance-list-component.scss',
})
export class AttendanceListComponent {
  filterVal?: string;
  onCategoryChanged(val: string) {
    console.log(val);
    this.filterVal = val;
  }
  employees: Employee[] = [
    { id: 1, name: 'Aarav Sharma' },
    { id: 2, name: 'Sita Koirala' },
    { id: 3, name: 'Bikash Thapa' },
  ];

  // Simulate data update: change the order and one name
  shuffleAndUpdate() {
    console.log('clicked');

    this.employees = [
      { id: 3, name: 'Bikash Updated' }, // name changed
      { id: 1, name: 'Aarav Sharma' },
      { id: 2, name: 'Sita Koirala' },
    ];
  }

  // trackBy function
  trackByEmployeeId(index: number, employee: Employee) {
    return employee.id; // unique identifier
  }
}
