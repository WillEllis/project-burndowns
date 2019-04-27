import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) { }

  doSignout() {
    return this.authService.doSignout();
  }

  ngOnInit(): void { }

  sprintGoals = {
    type: 'doughnut',
    data: {
      labels: [
        i18n('home.charts.missed'),
        i18n('home.charts.hit'),
      ],
      datasets: [
        {
          data: [17, 83],
          backgroundColor: [
            '#F44336',
            '#4CAF50'
          ],
          hoverBackgroundColor: [
            '#F44336',
            '#4CAF50'
          ],
        },
      ],
    },
  };

  burnDown = {
    type: 'bar',
    options: {
      responsive: true,
      tooltips: {
        mode: 'label',
      },
      legend: {
        display: true,
        position: 'right'
      },
      elements: {
        line: {
          fill: false,
        },
      },
      scales: {
        xAxes: [
          {
            stacked: true,
            display: true,
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            type: 'linear',
            stacked: true,
            display: true,
            gridLines: {
              display: true,
            },
          }
        ],
      },
    },

    data: {
      labels: [
        i18n('home.charts.sprint', 1),
        i18n('home.charts.sprint', 2),
        i18n('home.charts.sprint', 3),
        i18n('home.charts.sprint', 4),
        i18n('home.charts.sprint', 5),
        i18n('home.charts.sprint', 6),
        i18n('home.charts.sprint', 7),
      ],
      datasets: [
        {
          label: i18n('home.charts.initialEstimates'),
          type: 'line',
          data: [73, 60, 47, 34, 21, 8, 0],
          borderColor: '#EC932F',
          backgroundColor: '#EC932F',
          pointBorderColor: '#EC932F',
          pointBackgroundColor: '#EC932F',
          pointHoverBackgroundColor: '#EC932F',
          pointHoverBorderColor: '#EC932F'
        },
        {
          label: i18n('home.charts.remaining'),
          backgroundColor: '#2196F3',
          data: [73, 65, 46, 31, 26, 8, 1]
        },
        {
          label: i18n('home.charts.added'),
          backgroundColor: '#8BC34A',
          data: [0, 5, 2, 0, 8, 0, 0]
        },
        {
          label: i18n('home.charts.removed'),
          backgroundColor: '#F44336',
          data: [0, 0, -8, -2, 0, -5, 0]
        }
      ],
    },
  };


}
