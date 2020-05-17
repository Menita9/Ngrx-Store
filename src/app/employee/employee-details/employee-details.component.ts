import { Component, OnInit } from '@angular/core';
import { Store , select } from '@ngrx/store';
import * as employeeActions from '../employee.action';
import { EmployeeState, Employee } from '../employee.reducers';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})

export class EmployeeDetailsComponent implements OnInit {
employeeDetails: Array<Employee>;
employeeDetails$: Observable<EmployeeState>;


  constructor(private store: Store<{ employeeData: EmployeeState }>) {
    this.employeeDetails$ = store.pipe(select('employeeData'));
    // 'employeeData' is what we have added in app.module.ts to reference our Store
  }

  ngOnInit() {

    // subscribing to Employee State observable to fetch Data present in the store.
    this.employeeDetails$.subscribe((val) => {
      this.employeeDetails = val.EmployeeList;
      console.log(this.employeeDetails);
    });
  }
  addNewEmployee(employeedata: NgForm) {
    const empData = {
      ID: employeedata.controls.id.value,
      name: employeedata.controls.name.value,
      address: employeedata.controls.address.value,
      department: employeedata.controls.department.value
    };
    // dispatching addEmployee action to add Employee Details in the store
    this.store.dispatch(employeeActions.addEmployee({payload: empData}));
    employeedata.reset();
}
}
