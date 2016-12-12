import React from 'react'

import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './GridView.scss'

// import ReactGridLayout from 'react-grid-layout'
import {Responsive, WidthProvider} from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const MyFirstGrid = React.createClass({
  render: function() {
    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    var layouts = {lg: layout}
    return (
    <ResponsiveReactGridLayout className="layout" layouts={layouts}
      breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
      cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
        <div key={'a'}>a</div>
        <div key={'b'}>b</div>
        <div key={'c'}>c</div>
      </ResponsiveReactGridLayout>
    )
  }
});


export const GridView = () => (
  <MyFirstGrid />
)

export default GridView
