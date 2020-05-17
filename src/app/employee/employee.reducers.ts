import { Action, createReducer, on } from '@ngrx/store';
import * as EmployeeActions from '../employee/employee.action';

export interface Employee {
  ID: number;
  name: string;
  address: string;
  department: string;
}

export interface EmployeeState {
  EmployeeList: Array<Employee>;
}


export const initializeState = (): EmployeeState => {
  return { EmployeeList: Array<Employee>() };
};

export const initialState = initializeState();

const employeeReducer = createReducer(
    initialState,
    on(EmployeeActions.addEmployee, (state: EmployeeState, {payload}) => {
      return { ...state, EmployeeList: [...state.EmployeeList, payload] };
    })
  );

export function reducer(state: EmployeeState | undefined, action: Action) {
  return employeeReducer(state, action);
}
