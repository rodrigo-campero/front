import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { AfterViewInit, Component, NgZone, OnDestroy, OnInit } from '@angular/core';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {

  private chart: am4charts.XYChart;
  private semiCirclePieChart: am4charts.PieChart;
  private chartTreemapChart: am4charts.TreeMap;

  constructor(private zone: NgZone) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.chart1();
      this.semiCirclePie();
      this.chartTreemapDiv();
    });
  }

  chartTreemapDiv() {
    const chart = am4core.create('chartTreemapDiv', am4charts.TreeMap);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

    chart.data = [{
      name: 'First',
      children: [
        {
          name: 'A1',
          value: 100
        },
        {
          name: 'A2',
          value: 60
        },
        {
          name: 'A3',
          value: 30
        }
      ]
    },
    {
      name: 'Second',
      children: [
        {
          name: 'B1',
          value: 135
        },
        {
          name: 'B2',
          value: 98
        },
        {
          name: 'B3',
          value: 56
        }
      ]
    },
    {
      name: 'Third',
      children: [
        {
          name: 'C1',
          value: 335
        },
        {
          name: 'C2',
          value: 148
        },
        {
          name: 'C3',
          value: 126
        },
        {
          name: 'C4',
          value: 26
        }
      ]
    },
    {
      name: 'Fourth',
      children: [
        {
          name: 'D1',
          value: 415
        },
        {
          name: 'D2',
          value: 148
        },
        {
          name: 'D3',
          value: 89
        },
        {
          name: 'D4',
          value: 64
        },
        {
          name: 'D5',
          value: 16
        }
      ]
    },
    {
      name: 'Fifth',
      children: [
        {
          name: 'E1',
          value: 687
        },
        {
          name: 'E2',
          value: 148
        }
      ]
    }];

    chart.colors.step = 2;

    // define data fields
    chart.dataFields.value = 'value';
    chart.dataFields.name = 'name';
    chart.dataFields.children = 'children';

    chart.zoomable = false;
    const bgColor = new am4core.InterfaceColorSet().getFor('background');

    // level 0 series template
    const level0SeriesTemplate = chart.seriesTemplates.create('0');
    const level0ColumnTemplate = level0SeriesTemplate.columns.template;

    level0ColumnTemplate.column.cornerRadius(10, 10, 10, 10);
    level0ColumnTemplate.fillOpacity = 0;
    level0ColumnTemplate.strokeWidth = 4;
    level0ColumnTemplate.strokeOpacity = 0;

    // level 1 series template
    const level1SeriesTemplate = chart.seriesTemplates.create('1');
    const level1ColumnTemplate = level1SeriesTemplate.columns.template;

    level1SeriesTemplate.tooltip.animationDuration = 0;
    level1SeriesTemplate.strokeOpacity = 1;

    level1ColumnTemplate.column.cornerRadius(10, 10, 10, 10);
    level1ColumnTemplate.fillOpacity = 1;
    level1ColumnTemplate.strokeWidth = 4;
    level1ColumnTemplate.stroke = bgColor;

    const bullet1 = level1SeriesTemplate.bullets.push(new am4charts.LabelBullet());
    bullet1.locationY = 0.5;
    bullet1.locationX = 0.5;
    bullet1.label.text = '{name}';
    bullet1.label.fill = am4core.color('#ffffff');

    chart.maxLevels = 2;

    this.chartTreemapChart = chart;;
  }

  semiCirclePie() {
    const chart = am4core.create('semiCircleDiv', am4charts.PieChart);
    chart.startAngle = 160;
    chart.endAngle = 380;

    // Let's cut a hole in our Pie chart the size of 40% the radius
    chart.innerRadius = am4core.percent(40);

    // Add data
    chart.data = [{
      country: 'Lithuania',
      litres: 501.9,
      bottles: 1500
    }, {
      country: 'Czech Republic',
      litres: 301.9,
      bottles: 990
    }, {
      country: 'Ireland',
      litres: 201.1,
      bottles: 785
    }, {
      country: 'Germany',
      litres: 165.8,
      bottles: 255
    }, {
      country: 'Australia',
      litres: 139.9,
      bottles: 452
    }, {
      country: 'Austria',
      litres: 128.3,
      bottles: 332
    }, {
      country: 'UK',
      litres: 99,
      bottles: 150
    }, {
      country: 'Belgium',
      litres: 60,
      bottles: 178
    }, {
      country: 'The Netherlands',
      litres: 50,
      bottles: 50
    }];

    // Add and configure Series
    const pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'litres';
    pieSeries.dataFields.category = 'country';
    pieSeries.slices.template.stroke = new am4core.InterfaceColorSet().getFor('background');
    pieSeries.slices.template.strokeWidth = 1;
    pieSeries.slices.template.strokeOpacity = 1;

    // Disabling labels and ticks on inner circle
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;

    // Disable sliding out of slices
    pieSeries.slices.template.states.getKey('hover').properties.shiftRadius = 0;
    pieSeries.slices.template.states.getKey('hover').properties.scale = 1;
    pieSeries.radius = am4core.percent(40);
    pieSeries.innerRadius = am4core.percent(30);

    const cs = pieSeries.colors;
    cs.list = [am4core.color(new am4core.ColorSet().getIndex(0))];

    cs.stepOptions = {
      lightness: -0.05,
      hue: 0
    };
    cs.wrap = false;


    // Add second series
    const pieSeries2 = chart.series.push(new am4charts.PieSeries());
    pieSeries2.dataFields.value = 'bottles';
    pieSeries2.dataFields.category = 'country';
    pieSeries2.slices.template.stroke = new am4core.InterfaceColorSet().getFor('background');
    pieSeries2.slices.template.strokeWidth = 1;
    pieSeries2.slices.template.strokeOpacity = 1;
    pieSeries2.slices.template.states.getKey('hover').properties.shiftRadius = 0.05;
    pieSeries2.slices.template.states.getKey('hover').properties.scale = 1;

    pieSeries2.labels.template.disabled = true;
    pieSeries2.ticks.template.disabled = true;


    const label = chart.seriesContainer.createChild(am4core.Label);
    label.textAlign = 'middle';
    label.horizontalCenter = 'middle';
    label.verticalCenter = 'middle';
    label.adapter.add('text', (text, target) => {
      return '[font-size:18px]total[/]:\n[bold font-size:30px]' + pieSeries.dataItem.values.value.sum + '[/]';
    });

    this.semiCirclePieChart = chart;
  }

  chart1() {
    const chart = am4core.create('chartdivs', am4charts.XYChart);

    chart.paddingRight = 20;

    const data = [];
    let visits = 10;
    for (let i = 1; i < 366; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: new Date(2018, 0, i), name: 'name' + i, value: visits });
    }

    chart.data = data;

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'value';

    series.tooltipText = '{valueY.value}';
    chart.cursor = new am4charts.XYCursor();

    const scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    this.chart = chart;
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
      if (this.semiCirclePieChart) {
        this.semiCirclePieChart.dispose();
      }
      if (this.chartTreemapChart) {
        this.chartTreemapChart.dispose();
      }
    });
  }

}
