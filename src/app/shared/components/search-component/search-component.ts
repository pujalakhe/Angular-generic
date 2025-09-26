import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

const debounceMs = 300;

@Component({
  selector: 'app-search-component',
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './search-component.html',
  styleUrl: './search-component.scss',
})
export class SearchComponent {
  @Input() placeholderText: string = 'item';
  @Output() searchTerm: EventEmitter<string> = new EventEmitter<string>();

  searchControl = new FormControl('');

  private destroy$ = new Subject<void>();

  constructor() {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(debounceMs),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe((term) =>
        this.searchTerm.emit(term?.trim().toLowerCase() ?? '')
      );
  }

  clearSearch() {
    this.searchControl.setValue('');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
