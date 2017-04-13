import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



import {
  createFact,
  fetchList
} from './actions'

class WarehouseNav extends Component {
  componentWillMount () {
    this.state = {}
  }

  showWarehousePage () {
    this.setState({ showWarehouse: true })
  }

  render () {
    return (
      <div>

      </div>
    )
  }
}

export default connect(
  ({ warehouseNav }) => ({ warehouseNav }),
  (dispatch) => bindActionCreators(
    {
      createFact,
      fetchList
    },
    dispatch
  )
)(WarehouseNav)
