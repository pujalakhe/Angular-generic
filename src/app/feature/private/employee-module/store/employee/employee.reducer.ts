import { createReducer, on } from '@ngrx/store';
import { Employee } from '../../model/employee-model';
import {
  addEmployee,
  addEmployeeFailure,
  addEmployeeSuccess,
} from './employee.action';

export interface EmployeeState {
  employees: Employee[];
  loading: boolean;
  error: string | null;
}

export const initialEmployeeState: EmployeeState = {
  employees: [],
  loading: false,
  error: null,
};

export const employeeReducer = createReducer(
  initialEmployeeState,
  //add
  on(addEmployee, (state) => ({
    ...state,
    loading: true,
  })),

  on(addEmployeeSuccess, (state, { employee }) => ({
    ...state,
    employees: [...state.employees, employee],
    loading: false,
    error: null,
  })),

  on(addEmployeeFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
