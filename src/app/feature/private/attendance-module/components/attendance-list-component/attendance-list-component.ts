import { Component } from '@angular/core';

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
}
