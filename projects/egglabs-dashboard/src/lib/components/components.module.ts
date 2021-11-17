import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph/graph.component';
import { ReportComponent } from './report/report.component';



@NgModule({
  declarations: [
    GraphComponent,
    ReportComponent
  ],
  exports: [GraphComponent, ReportComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
