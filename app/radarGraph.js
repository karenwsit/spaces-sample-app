import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Radar } from 'react-chartjs-2'

const options = {
  maintainAspectRatio: false
}

const data = {
  labels: ['On Time %', 'Fill Rate %', 'Completeness %', 'Damage Free %', 'Accurate Invoicing & Documentation %'],
  datasets: [
    {
      label: 'Los Angeles Warehouse',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, .4)',
      pointBackgroundColor: 'rgba(153, 102, 255, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(153, 102, 255, 1)',
      data: [0.65, 0.59, 0.90, 0.81, 0.56]
    },
    {
      label: 'San Francisco Warehouse',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      pointBackgroundColor: 'rgba(75, 192, 192, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
      data: [0.28, 0.48, 0.71, 0.19, 0.86]
    },
    {
      label: 'Tacoma Warehouse',
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      pointBackgroundColor: 'rgba(255, 206, 86, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 206, 86, 1)',
      data: [0.91, 0.98, 0.84, 0.78, 0.82]
    }
  ]
};


class RadarGraph extends Component {
  // componentWillMount () {
  //   this.props.fetchGraph()
  // }

  getElementAtEvent (event) { console.log('HI TAYLOR THIS IS NESTING', event) }
  onElementsClick (elems) { getElementatEvent(elems)  }


  render () {
    return (
      <div>
        <h1>Current Perfect Order Index</h1>
        <Radar data={data} options={options} width={900} height={350} getElementAtEvent={this.getElementAtEvent}/>
      </div>
    )
  }
}

// BarGraph.propTypes = {
//
// }

export default connect(
  ({ radarGraph }) => ({ radarGraph }),
  (dispatch) => bindActionCreators(
    {},
    dispatch
  )
)(RadarGraph)
