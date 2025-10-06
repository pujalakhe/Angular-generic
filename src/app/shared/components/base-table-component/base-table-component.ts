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

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-base-table-component',
  imports: [CommonModule, MaterialModule, TranslateModule],
  templateUrl: './base-table-component.html',
  styleUrl: './base-table-component.scss',
})
export class BaseTableComponent<T> implements OnInit, AfterViewInit {
  @Input({ required: true }) columnsArray: TableColumn[] = [];
  @Input({ required: true }) tableData?: T[];
  @Input() showActions = false;
  @Input() actions: { type: string; label: string; color?: string }[] = [];

  @Output() actionClicked = new EventEmitter<{ type: string; row: T }>();

  dataSource: MatTableDataSource<T> = new MatTableDataSource();

  actionLabel: string = 'ACTIONS';
  SnLabel: string = 'S.N';
  noRecord: string = 'NO_RECORD';

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  ngOnInit(): void {
    if (this.tableData) {
      this.dataSource.data = this.tableData; // Direct assignment
    }
  }

  get displayedColumns(): string[] {
    const cols = ['sn', ...this.columnsArray.map((c) => c.key)];
    if (this.showActions) {
      cols.push('actions');
    }
    return cols;
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

  onAction(type: string, row: T) {
    this.actionClicked.emit({ type, row });
  }
}
