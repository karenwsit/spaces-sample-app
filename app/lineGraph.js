import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Line } from 'react-chartjs-2'

const fillRateData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: 'Warehouse 1',
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
        data: [0.8, 0.72, 0.94, 0.37, 0.51, 0.68, 0.82]
      },
      {
        label: 'Warehouse 2',
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
        data: [0.68, 0.97, 0.96, 0.02, 0.33, 0.69, 0.73]
      },
      {
        label: 'Warehouse 3',
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
        data: [0.91, 0.98, 0.84, 0.78, 0.90, 0.87, 0.80]
      }
    ]
  }

  const damageFreeData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: 'Warehouse 1',
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
          data: [0.8, 0.72, 0.94, 0.37, 0.51, 0.68, 0.82]
        },
        {
          label: 'Warehouse 2',
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
          data: [0.68, 0.97, 0.96, 0.02, 0.33, 0.69, 0.73]
        },
        {
          label: 'Warehouse 3',
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
          data: [0.91, 0.98, 0.84, 0.78, 0.90, 0.87, 0.80]
        }
      ]
    }

    const onTimeData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: 'Warehouse 1',
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
            data: [0.8, 0.72, 0.94, 0.37, 0.51, 0.68, 0.82]
          },
          {
            label: 'Warehouse 2',
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
            data: [0.68, 0.97, 0.96, 0.02, 0.33, 0.69, 0.73]
          },
          {
            label: 'Warehouse 3',
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
            data: [0.91, 0.98, 0.84, 0.78, 0.90, 0.87, 0.80]
          }
        ]
      }

      const invoicingDocumentationData = {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              label: 'Warehouse 1',
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
              data: [0.8, 0.72, 0.94, 0.37, 0.51, 0.68, 0.82]
            },
            {
              label: 'Warehouse 2',
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
              data: [0.68, 0.97, 0.96, 0.02, 0.33, 0.69, 0.73]
            },
            {
              label: 'Warehouse 3',
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
              data: [0.91, 0.98, 0.84, 0.78, 0.90, 0.87, 0.80]
            }
          ]
        }

const options = {
  maintainAspectRatio: false
}

class LineGraph extends Component {
  getElementAtEvent (elem) { console.log('THIS IS THE ELEMENT', elem) }

  render () {
    return (
      <div>
        <h2>2017 Fill Rate %</h2>
        <Line data={fillRateData} width={900} height={250} getElementAtEvent={this.getElementAtEvent}/>
        <h2>2017 Damage Free %</h2>
        <Line data={damageFreeData} width={900} height={250} getElementAtEvent={this.getElementAtEvent}/>
        <h2>2017 On Time %</h2>
        <Line data={onTimeData} width={900} height={250} getElementAtEvent={this.getElementAtEvent}/>
        <h2>2017 Accurate Invoicing & Documentation %</h2>
        <Line data={invoicingDocumentationData} width={900} height={250} getElementAtEvent={this.getElementAtEvent}/>
        <h2>2017 Completeness %</h2>
        <Line data={invoicingDocumentationData} width={900} height={250} getElementAtEvent={this.getElementAtEvent}/>
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
