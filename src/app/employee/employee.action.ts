import { createAction, props } from '@ngrx/store';

interface User {
  ID: number;
  name: string;
  address: string;
  department: string;
}

export const addEmployee = createAction('[Employee Data] Add new Employee', props<{payload: User }>());
