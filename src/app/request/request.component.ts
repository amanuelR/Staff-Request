import { Component, Input } from '@angular/core';
import { StaffRequest } from 'src/models/staff-request.model';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  staffRequests: StaffRequest[] =[];
  isFormSubmitted = false;
  
  onSubmit(request: StaffRequest): void{
    this.staffRequests.push(request);
    this.isFormSubmitted = true;
  }
}
