import React, { Component, PureComponent } from 'react'
import VirtualizedSelect from 'react-virtualized-select'

import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

export default class MySelect extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const options = [
      { label: "One", value: 1 },
      { label: "Two", value: 2 },
      { label: "Three", value: 3, disabled: true }
    ]

    return (
      <VirtualizedSelect
        multi
        options={options}
        onChange={(selectValue) => this.setState({ selectValue })}
        value={this.state.selectValue}
      />
    )
  }
}
