import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Avatar, Buttons, PageHeader, PageTitle, PageLabel, PageIcon } from '@lanetix/unum'

import LineGraph from './lineGraph'
import RadarGraph from './radarGraph'
import Warehouse from './warehouse'

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
  }

  showLineGraph () {
    this.setState({
      showLineGraph: true,
      showWarehousePage: false
    })
  }

  render () {
    const { showRadarGraph, showLineGraph, showWarehousePage } = this.state

    return (
      <div>
        <RadarGraph />
        <PillButton
          onClick={() => { this.showLineGraph() }}
        >
          West Coast Warehouses
        </PillButton>
        <PillButton>San Diego Warehouse</PillButton>
        <PillButton
          onClick={() => { this.showWarehousePage() }}
          disabled={showWarehousePage}
        >
          San Francisco Warehouse
        </PillButton>
        <PillButton>Tacoma Warehouse</PillButton>
        {
          showWarehousePage
            ? <Warehouse />
            : null
        }
        {
          showLineGraph
            ? <LineGraph />
            : null
        }
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
