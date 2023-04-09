import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { StaffRequest } from 'src/models/staff-request.model';

@Component({
  selector: 'app-staff-request-form',
  templateUrl: './staff-request-form.component.html',
  styleUrls: ['./staff-request-form.component.css']
})
export class StaffRequestFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<StaffRequest>();

  staffRequestForm!: FormGroup;
  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;
  today = new Date();
  isFormSubmitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.staffRequestForm = this.formBuilder.group({
      date: [new Date(), [Validators.required]],
      jobTitle: ['', Validators.required],
      department: ['', Validators.required],
      hiringManagerName: ['', Validators.required],
      hiringManagerEmail: ['', [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]]
    });
  }
  
  onSubmit(): void {
    if (this.staffRequestForm.valid) {
      const newRequest: StaffRequest = {
        date: this.staffRequestForm.value.date,
        jobTitle: this.staffRequestForm.value.jobTitle,
        department: this.staffRequestForm.value.department,
        hiringManagerName: this.staffRequestForm.value.hiringManagerName,
        hiringManagerEmail: this.staffRequestForm.value.hiringManagerEmail
      };
      this.formSubmit.emit(newRequest);
    }
    this.isFormSubmitted = true;
    this.formGroupDirective.resetForm();
  }

}
