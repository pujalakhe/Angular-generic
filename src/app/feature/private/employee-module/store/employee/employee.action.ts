import { createAction, props } from '@ngrx/store';
import { Employee } from '../../model/employee-model';

//add employee
export const addEmployee = createAction(
  '[Employee] Add Employee',
  props<{ employee: Employee }>()
);

export const addEmployeeSuccess = createAction(
  '[Employee] Add Employee Success',
  props<{ employee: Employee }>()
);

export const addEmployeeFailure = createAction(
  '[Employee] Add Employee Failure',
  props<{ error: string }>()
);
