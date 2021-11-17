import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { EgglabsDashboardComponent } from './egglabs-dashboard.component';



@NgModule({
  declarations: [
    EgglabsDashboardComponent
  ],
  imports: [
    ComponentsModule
  ],
  exports: [
    EgglabsDashboardComponent
  ]
})
export class EgglabsDashboardModule { }
