import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { UyeService } from '../../uye/uye.service';

import { KeyValueModel } from '../../shared/KeyValue';
import { IlService } from '../../shared/il.service';

@Component({
  selector: 'app-pie-chart2',
  templateUrl: './pie-chart2.component.html',
  styleUrls: ['./pie-chart2.component.css']
})
export class PieChart2Component implements OnInit {

  uyeler: KeyValueModel[];
  gorevler: Array<string> = [];
  sayilar: Array<number> = [];
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(50,60,255,0.3)', 'rgba(50,10,255,0.3)'],
    },
  ];

  constructor(private service: UyeService, private ilService: IlService) { }

  GetUyeGorevDurumlar(): void {
    this.service.GetUyeIller().subscribe(r => {
      this.uyeler = r;
      this.uyeler.forEach(f => {
        this.pieChartLabels.push(this.ilService.GetIlAdi(+f.key));
        this.pieChartData.push(f.value);

      })
    });
  }

  ngOnInit() {
    this.GetUyeGorevDurumlar();
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
