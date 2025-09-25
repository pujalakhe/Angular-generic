import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { TableColumn } from '../../model/table-column.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-table-component',
  imports: [CommonModule, MaterialModule],
  templateUrl: './base-table-component.html',
  styleUrl: './base-table-component.scss',
})
export class BaseTableComponent<T> implements OnInit, AfterViewInit {
  @Input({ required: true }) columnsArray: TableColumn[] = [];
  @Input({ required: true }) tableData?: T[];
  dataSource: MatTableDataSource<T> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  ngOnInit(): void {
    if (this.tableData) {
      this.dataSource.data = this.tableData; // Direct assignment
    }
  }

  get displayedColumns(): string[] {
    return ['sn', ...this.columnsArray.map((c) => c.key)];
  }

  getCellValue(element: any, column: TableColumn): any {
    if (column.valueAccessor) {
      return column.valueAccessor(element);
    }
    // fallback: nested path lookup
    return column.key
      .split('.')
      .reduce((obj, prop) => obj && obj[prop], element);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
