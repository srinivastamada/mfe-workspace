import { Component, OnInit } from '@angular/core';
import { ChartData } from 'ngx-d3-charts';

@Component({
  selector: 'egglabs-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  data: ChartData[] = [
    { label: 'Water', value: 20 },
    { label: 'Land', value: 20 },
    { label: 'Sand', value: 25 },
    { label: 'Grass', value: 10 },
    { label: 'Earth', value: 5 },
    { label: 'Air', value: 9 },
    {label: 'Tree',value: 11}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
