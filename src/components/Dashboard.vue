<template>
<v-layout row wrap>
  <v-flex xs12 md12>
    <p class='headline text-xs-center font-weight-bold page-title'>DASHBOARD</p>
  </v-flex>
  <v-flex xs12 md12>
    <v-container fill-height>
      <v-layout
        row
        wrap
      >
        <v-flex md12 xs12>
          <v-card>
            <br>
            <p class='title text-xs-center'>Recently Active User</p>
            <bar-chart
            :data="dataUser"
            :options="chartOption"
            :height="200"
            :width="500">
            </bar-chart>
            <br>
          </v-card>
          <br>
        </v-flex>
        <v-flex md12 xs12>
          <v-layout row wrap>
            <v-flex md8 xs8>
               <v-card>
                <br>
                <p class='title text-xs-center'>Weekly Sales</p>
                <line-chart
                :data="dataSales"
                :options="chartOption2"
                :height="300"
                :width="500">
                </line-chart>
                <br>
              </v-card>
            </v-flex>
            
            <v-flex md1 xs1 style="margin:0; padding:0"/>
            <v-flex md3 xs3>
                <br>
                <p class='title text-xs-center'>Overall Target</p>
                <pie-chart
                :options="chartOption3"
                :data="dataComplete"
                :height="300">
                </pie-chart>
                <br>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>

</v-layout>
</template>

<script>

import BarChart from '@/components/Chart/Bar'
import LineChart from '@/components/Chart/Line'
import PieChart from '@/components/Chart/Pie'
  export default {
    components: {
      'bar-chart': BarChart,
      'line-chart': LineChart,
      'pie-chart': PieChart,
    },
    data: () => ({
      dataUser: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Number of Users',
            backgroundColor: '#005695',
            data: [50, 70, 70, 88, 200, 150, 80, 90, 120, 75, 140, 200]
          }
        ]
      },
      chartOption: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            stacked: true,
            ticks: {
              minRotation: 0,
              autoSkip: false
            }
          }],
          yAxes: [{
            ticks: {
              stepSize: 20,
              beginAtZero: true,
              maxTicksLimit: 3
            }
          }]
        }
      },
      dataSales: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
          {
            label: 'Number of Sales',
            backgroundColor: '#82B1FF',
            data: [5000, 4500, 3888, 4856, 6574, 4564, 7000]
          }
        ]
      },
      chartOption2: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            stacked: true,
            ticks: {
              minRotation: 0,
              autoSkip: false
            }
          }],
          yAxes: [{
            ticks: {
              stepSize: 1000,
              beginAtZero: true,
              maxTicksLimit: 3
            }
          }]
        }
      },
      dataComplete: {
        datasets: [{
            data: [80, 20],
            backgroundColor: [
              '#2196F3',
              '#9692af'],
        }],
        labels: [
          'Fulfilled',
          'Gap',
        ]
      },
      chartOption3: {
        legend: false,
        responsive: true,
        maintainAspectRatio: false,
        pieceLabel: {
         render: 'value' //show values
        }
      },
    })
  }
</script>

<style>
p {
  color: #005695;
}
.page-title {
  height: 35px;
}
</style>
