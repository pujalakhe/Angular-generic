export interface TableColumn {
  key: string; // property in User object (or synthetic column like 'sn', 'actions')
  label: string; // human readable header
  sortable?: boolean;
  valueAccessor?: (row: any) => any; // optional custom accessor
}
