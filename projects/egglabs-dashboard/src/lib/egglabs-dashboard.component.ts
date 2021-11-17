import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'egglabs-dashboard',
  template: `
    <div>
      <h2>Dashboard</h2>
      <div class="columns">
        <div class="column">
          <egglabs-graph></egglabs-graph>
        </div>
        <div class="column">
          <egglabs-report></egglabs-report>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./egglabs-dashboard.component.scss'],
})
export class EgglabsDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
