import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Avatar, Buttons, PageHeader, PageTitle, PageLabel, PageIcon } from '@lanetix/unum'

const { PillButton, SettingsCircleButton } = Buttons

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
      <PillButton>Warehouse 1</PillButton>
      <PillButton
        onClick={() => { this.showWarehousePage }}
      >
        Warehouse 2
      </PillButton>
      <button>Warehouse 3</button>
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
