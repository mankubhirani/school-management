import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradesRoutingModule } from './grades-routing.module';
import { GradeListComponent } from './grade-list/grade-list.component';
import { GradeDetailComponent } from './grade-detail/grade-detail.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    GradeListComponent,
    GradeDetailComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    GradesRoutingModule
  ]
})
export class GradesModule { }
