import { Component, OnInit } from '@angular/core';
import { ChartType, ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { UyeService } from '../../uye/uye.service';

import { KeyValueModel } from '../../shared/KeyValue';
import { IlService } from '../../shared/il.service';

@Component({
  standalone: false,
  selector: 'app-pie-chart2',
  templateUrl: './pie-chart2.component.html',
  styleUrls: ['./pie-chart2.component.css']
})
export class PieChart2Component implements OnInit {

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
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(50,60,255,0.3)', 'rgba(50,10,255,0.3)'],
    }]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [ChartDataLabels];

  constructor(private service: UyeService, private ilService: IlService) { }

  GetUyeGorevDurumlar(): void {
    this.service.GetUyeIller().subscribe(r => {
      this.uyeler = r;
      const labels: string[] = [];
      const data: number[] = [];
      this.uyeler.forEach(f => {
        labels.push(this.ilService.GetIlAdi(+f.key));
        data.push(f.value);
      });
      this.pieChartData = {
        labels,
        datasets: [{
          data,
          backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(50,60,255,0.3)', 'rgba(50,10,255,0.3)'],
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
