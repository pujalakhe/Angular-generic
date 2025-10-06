import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { CommonModule } from '@angular/common';
import { InputSelectComponent } from '../generic-inputs/input-select-component/input-select-component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-component',
  imports: [MaterialModule, CommonModule, InputSelectComponent],
  templateUrl: './filter-component.html',
  styleUrl: './filter-component.scss',
})
export class FilterComponent {
  isModalOpen: boolean = false;

  @Output() filterChanged = new EventEmitter<string>();

  filteredOptions = [
    { value: 'Fruits', label: 'Fruits' },
    { value: 'Electronics', label: 'Electronics' },
    { value: 'Clothing', label: 'Clothing' },
    { value: 'Books', label: 'Books' },
    { value: 'Furniture', label: 'Furniture' },
  ];

  filterValue = new FormControl();

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onCategorySelected(selectedVal: string) {
    console.log('Selected category value:', selectedVal);
    this.filterChanged.emit(selectedVal);
  }
}
