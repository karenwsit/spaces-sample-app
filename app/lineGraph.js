import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Line } from 'react-chartjs-2'
import { Avatar, Buttons, PageHeader, PageTitle, PageLabel, PageIcon } from '@lanetix/unum'
import { spaceId } from './config.js'

const fillRateData = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: 'Los Angeles Warehouse',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(153, 102, 255, 0.4)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(153, 102, 255, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(153, 102, 255, 1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0.8, 0.72, 0.40, 0.59]
      },
      {
        label: 'San Francisco Warehouse',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0.68, 0.97, 0.96, 0.67]
      },
      {
        label: 'Tacoma Warehouse',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255, 206, 86, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(255, 206, 86, 1)',
        pointHoverBorderColor: 'rgba(255, 206, 86, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0.91, 0.98, 0.84, 0.78]
      }
    ]
  }

  const damageFreeData = {
      labels: ["January", "February", "March", "April"],
      datasets: [
        {
          label: 'Los Angeles Warehouse',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(153, 102, 255, 0.4)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(153, 102, 255, 1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(153, 102, 255, 1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [0.8, 0.72, 0.76, 0.81]
        },
        {
          label: 'San Francisco Warehouse',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75, 192, 192, 1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [0.68, 0.97, 0.96, 0.19]
        },
        {
          label: 'Tacoma Warehouse',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(255, 206, 86, 1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(255, 206, 86, 1)',
          pointHoverBorderColor: 'rgba(255, 206, 86, 1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [0.86, 0.9, 0.80, 0.78]
        }
      ]
    }

    const onTimeData = {
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            label: 'Los Angeles Warehouse',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(153, 102, 255, 0.4)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(153, 102, 255, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(153, 102, 255, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0.8, 0.72, 0.94, 0.65]
          },
          {
            label: 'San Francisco Warehouse',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75, 192, 192, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0.68, 0.97, 0.96, 0.71]
          },
          {
            label: 'Tacoma Warehouse',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255, 206, 86, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255, 206, 86, 1)',
            pointHoverBorderColor: 'rgba(255, 206, 86, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0.91, 0.98, 0.84, 0.78]
          }
        ]
      }

      const invoicingDocumentationData = {
          labels: ["January", "February", "March", "April"],
          datasets: [
            {
              label: 'Los Angeles Warehouse',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(153, 102, 255, 0.4)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(153, 102, 255, 1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(153, 102, 255, 1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [0.8, 0.72, 0.94, 0.56]
            },
            {
              label: 'San Francisco Warehouse',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75, 192, 192, 1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [0.68, 0.97, 0.96, 0.86]
            },
            {
              label: 'Tacoma Warehouse',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(255, 206, 86, 0.2)',
              borderColor: 'rgba(255, 206, 86, 1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(255, 206, 86, 1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(255, 206, 86, 1)',
              pointHoverBorderColor: 'rgba(255, 206, 86, 1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [0.91, 0.98, 0.84, 0.78]
            }
          ]
        }















  const accountFillRateData = {
      labels: ["January", "February", "March", "April"],
      datasets: [
        {
          label: 'Nike',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75, 192, 192, 1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [0.68, 0.97, 0.96, 0.67]
        }
      ]
    }

    const accountDamageFreeData = {
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            label: 'Nike',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75, 192, 192, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0.68, 0.97, 0.96, 0.19]
          }
        ]
      }

      const accountOnTimeData = {
          labels: ["January", "February", "March", "April"],
          datasets: [
            {
              label: 'Nike',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75, 192, 192, 1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [0.68, 0.97, 0.96, 0.71]
            }
          ]
        }

        const accountInvoicingDocumentationData = {
            labels: ["January", "February", "March", "April"],
            datasets: [
              {
                label: 'Nike',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75, 192, 192, 1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [0.68, 0.97, 0.96, 0.86]
              }
            ]
          }

const options = {
  legend: {
    labels: {
      fontSize: 14
    }
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}

class LineGraph extends Component {

  render () {
    return (
      spaceId == 2753
      ?
      <div>
        <PageTitle>Accurate Invoicing & Documentation %</PageTitle>
        <Line data={invoicingDocumentationData}  options={options} width={900} height={200} getElementAtEvent={this.getElementAtEvent}/>
        <PageTitle>Completeness %</PageTitle>
        <Line data={onTimeData} options={options} width={900} height={200} getElementAtEvent={this.getElementAtEvent}/>
        <PageTitle>Damage Free %</PageTitle>
        <Line data={damageFreeData} options={options} width={900} height={200} getElementAtEvent={this.getElementAtEvent}/>
        <PageTitle>Fill Rate %</PageTitle>
        <Line data={fillRateData} options={options} width={900} height={200} getElementAtEvent={this.getElementAtEvent}/>
        <PageTitle>On Time %</PageTitle>
        <Line data={onTimeData} options={options} width={900} height={200} getElementAtEvent={this.getElementAtEvent}/>
      </div>
      :
      <div>
        <PageTitle>Accurate Invoicing & Documentation %</PageTitle>
        <Line data={accountInvoicingDocumentationData}  options={options} width={900} height={200} getElementAtEvent={this.getElementAtEvent}/>
        <PageTitle>Completeness %</PageTitle>
        <Line data={accountOnTimeData} options={options} width={900} height={200} getElementAtEvent={this.getElementAtEvent}/>
        <PageTitle>Damage Free %</PageTitle>
        <Line data={accountDamageFreeData} options={options} width={900} height={200} getElementAtEvent={this.getElementAtEvent}/>
        <PageTitle>Fill Rate %</PageTitle>
        <Line data={accountFillRateData} options={options} width={900} height={200} getElementAtEvent={this.getElementAtEvent}/>
        <PageTitle>On Time %</PageTitle>
        <Line data={accountOnTimeData} options={options} width={900} height={200} getElementAtEvent={this.getElementAtEvent}/>
      </div>
    )
  }
}

export default connect(
  ({ lineGraph }) => ({ lineGraph }),
  (dispatch) => bindActionCreators(
    {},
    dispatch
  )
)(LineGraph)
