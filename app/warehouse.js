import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Avatar, Buttons, PageHeader, PageTitle, PageLabel, PageIcon } from '@lanetix/unum'

const { PillButton, SettingsCircleButton } = Buttons

import {
  createFact,
  fetchList
} from './actions'

class Warehouse extends Component {
  // componentWillMount () {
  //   this.state = {}
  // }

  render () {
    return (
      <div>
        <h3>THIS WILL BE THE WAREHOUSE PAGE</h3>
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
