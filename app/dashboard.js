import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Avatar, Buttons, PageHeader, PageTitle, PageLabel, PageIcon } from '@lanetix/unum'

import LineGraph from './lineGraph'
import RadarGraph from './radarGraph'
import WarehouseNav from './warehouseNav'

const { PillButton, SettingsCircleButton } = Buttons

import {
  createFact,
  fetchList
} from './actions'

class Dashboard extends Component {
  componentWillMount () {
    this.state = {
      showRadarGraph: true,
      showLineGraph: true,
      showWarehousePage: false
    }
  }

  showWarehousePage () {
    this.setState({
      showLineGraph: false,
      showWarehousePage: true
    })
    console.log('THE BUTTON WORKS')
    console.log('this.state yo', this.state)
  }

  render () {
    return (
      <div>
        <RadarGraph />
        <PillButton>Warehouse 1</PillButton>
        <PillButton
          onClick={ () => { this.showWarehousePage } }
        >
          Warehouse 2
        </PillButton>
        <PillButton>Warehouse 3</PillButton>
        <LineGraph />
      </div>
    )
  }
}

// List.propTypes = {
//   createFact: PropTypes.func.isRequired,
//   fetchList: PropTypes.func.isRequired,
//   list: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     data: PropTypes.shape({
//       name: PropTypes.string.isRequired
//     }).isRequired
//   })).isRequired
// }

export default connect(
  ({ dashboard }) => ({ dashboard }),
  (dispatch) => bindActionCreators(
    {
      createFact,
      fetchList
    },
    dispatch
  )
)(Dashboard)
