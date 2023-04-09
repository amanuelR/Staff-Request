import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StaffRequest } from 'src/models/staff-request.model';

@Component({
  selector: 'app-staff-request-table',
  templateUrl: './staff-request-table.component.html',
  styleUrls: ['./staff-request-table.component.css']
})
export class StaffRequestTableComponent implements OnChanges {
  @Input() requests: StaffRequest[] =[];
  @Input() isFormSubmitted: boolean = false;

  dataSource = new MatTableDataSource<any>();
  displayedColumns = ['date', 'jobTitle', 'department', 'hiringManagerName', 'hiringManagerEmail'];

  ngOnChanges(changes: SimpleChanges){
    if(changes['requests']){
      this.dataSource.data = changes['requests'].currentValue;
    }
  }
}
