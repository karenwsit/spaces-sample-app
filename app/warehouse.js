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

  console.log('THIS SHOULD LOG YO')

  render () {
    return (
      <div>
      <button>Warehouse 1</button>
      <button
        onClick={() => { this.showWarehousePage }}
      >
        Warehouse BLAH BLAHBLAH
      </button>
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
