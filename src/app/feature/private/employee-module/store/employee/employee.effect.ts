import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EmployeeApiService } from '../../services/employee-api-service';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import {
  addEmployee,
  addEmployeeFailure,
  addEmployeeSuccess,
} from './employee.action';
import { Router } from '@angular/router';
import { ROUTE_PATHS } from '../../../../../core/constants/routes.constant';

@Injectable()
export class EmployeeEffects {
  private actions$ = inject(Actions);
  private store = inject(Store);
  private router = inject(Router);
  private employeeApiService = inject(EmployeeApiService);

  addEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addEmployee),
      mergeMap(({ employee }) =>
        this.employeeApiService.addEmployee(employee).pipe(
          map((res) => addEmployeeSuccess({ employee: res })),
          catchError(() =>
            of(addEmployeeFailure({ error: 'Failed to add Employee' }))
          )
        )
      )
    )
  );

  addEmployeeSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addEmployeeSuccess),
        tap(() => {
          this.router.navigate([ROUTE_PATHS.EMPLOYEE, ROUTE_PATHS.LIST]);
        })
      ),
    { dispatch: false }
  );
}
