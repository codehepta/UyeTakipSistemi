import { Component, OnInit } from '@angular/core';
import { ChartType, ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { UyeService } from '../../uye/uye.service';

import { KeyValueModel } from '../../shared/KeyValue';

@Component({
  standalone: false,
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  uyeler: KeyValueModel[];

  public pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          return ctx.chart.data.labels?.[ctx.dataIndex] ?? value;
        },
      },
    }
  };
  public pieChartData: ChartData<'pie'> = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    }]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [ChartDataLabels];

  constructor(private service: UyeService) { }

  GetUyeGorevDurumlar(): void {
    this.service.GetUyeGorevDurumlar().subscribe(r => {
      this.uyeler = r;
      const labels: string[] = [];
      const data: number[] = [];
      this.uyeler.forEach(f => {
        labels.push(f.key);
        data.push(f.value);
      });
      this.pieChartData = {
        labels,
        datasets: [{
          data,
          backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
        }]
      };
    });
  }

  ngOnInit() {
    this.GetUyeGorevDurumlar();
  }

  public chartClicked({ event, active }: { event?: ChartEvent, active?: object[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: object[] }): void {
    console.log(event, active);
  }

}
