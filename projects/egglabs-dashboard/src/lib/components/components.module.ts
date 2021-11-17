import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph/graph.component';
import { ReportComponent } from './report/report.component';
import { NgxD3ChartsModule } from 'ngx-d3-charts';

@NgModule({
  declarations: [GraphComponent, ReportComponent],
  exports: [GraphComponent, ReportComponent],
  imports: [CommonModule, NgxD3ChartsModule],
})
export class ComponentsModule {}
