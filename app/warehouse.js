import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DataGrid from 'react-data-grid'

import { Avatar, Buttons, PageHeader, PageTitle, PageLabel, PageIcon } from '@lanetix/unum'

const { PillButton, SettingsCircleButton } = Buttons

import {
  createFact,
  fetchList
} from './actions'

class Warehouse extends Component {
  const columns = [
    { name: 'Orders to Ship', key: 'orders_to_ship' },
    { name: 'Overdue Shipments'}
  ]


  render () {
    return (
      <div>
        <h2>Inventory</h2>
        <DataGrid></DataGrid>
      </div>
    )
  }
}

export default connect(
  ({ warehouse }) => ({ warehouse }),
  (dispatch) => bindActionCreators(
    {
      createFact,
      fetchList
    },
    dispatch
  )
)(Warehouse)
