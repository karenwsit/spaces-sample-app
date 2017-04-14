import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Avatar, Buttons, PageHeader, PageTitle, PageLabel, PageIcon } from '@lanetix/unum'

import LineGraph from './lineGraph'
import RadarGraph from './radarGraph'
import Warehouse from './warehouse'

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
      <div className='wms'>
        <RadarGraph />
        <LineGraph />
      </div>
    )
  }
}

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
