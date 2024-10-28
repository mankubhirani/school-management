import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AttendanceDetailComponent } from './attendance-detail/attendance-detail.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AttendanceListComponent,
    AttendanceDetailComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule
  ]
})
export class AttendanceModule { }
