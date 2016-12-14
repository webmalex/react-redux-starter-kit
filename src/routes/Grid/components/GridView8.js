import React from 'react'
import {Responsive, WidthProvider} from 'react-grid-layout';
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './GridView.scss'
import MySelect from './MySelect'

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const GridView = () => (
  <ResponsiveLocalStorageLayout />
)

export default GridView

// var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
const originalLayouts = getFromLS('layouts') || {};
const ResponsiveLocalStorageLayout = React.createClass({
  // mixins: [PureRenderMixin],

  getDefaultProps() {
    return {
      className: "layout",
      cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
      rowHeight: 30
    };
  },

  getInitialState() {
    return {
      layouts: JSON.parse(JSON.stringify(originalLayouts))
    };
  },

  resetLayout() {
    this.setState({layouts: {}});
  },

  onLayoutChange(layout, layouts) {
    saveToLS('layouts', layouts);
    this.setState({layouts});
    // this.props.onLayoutChange(layout, layouts);
  },

  render() {
    return (
      <div>
        <button onClick={this.resetLayout}>Reset Layout</button>
        <ResponsiveReactGridLayout
            ref="rrgl"
            {...this.props}
            layouts={this.state.layouts}
            onLayoutChange={this.onLayoutChange}>
          <div key="1" data-grid={{w: 2, h: 3, x: 0, y: 0}}>
            <MySelect />
          </div>
          <div key="2" data-grid={{w: 2, h: 3, x: 2, y: 0}}><span className="text">2</span></div>
          <div key="3" data-grid={{w: 2, h: 3, x: 4, y: 0}}><span className="text">3</span></div>
          <div key="4" data-grid={{w: 2, h: 3, x: 6, y: 0}}><span className="text">4</span></div>
          <div key="5" data-grid={{w: 2, h: 3, x: 8, y: 0}}><span className="text">5</span></div>
        </ResponsiveReactGridLayout>
      </div>
    );
  }
});

module.exports = ResponsiveLocalStorageLayout;

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {};
    } catch(e) {/*Ignore*/}
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem('rgl-8', JSON.stringify({
      [key]: value
    }));
  }
}
