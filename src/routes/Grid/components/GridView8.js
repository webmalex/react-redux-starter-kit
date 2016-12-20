import React, {Component, PureComponent} from 'react'
import {Responsive, WidthProvider} from 'react-grid-layout';
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './GridView.scss'
import MySelect from './MySelect'

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class GridView extends PureComponent {
  constructor(props) {
    super(props);
    // this.state = {layouts: JSON.parse(JSON.stringify(getFromLS('layouts') || {}))};
    this.state = {};
    // this.resetLayout = this.resetLayout.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
    // console.log('constructor');
  }

  static defaultProps = {
      className: "layout",
      cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
      rowHeight: 30
  }

  // resetLayout() {
  //   this.setState({layouts: {}});
  // }

  onLayoutChange(layout, layouts) {
    // saveToLS('layouts', layouts);
    // this.setState({layouts});
    this.props.update(layouts);
  }

  render() {
    return (
      <div>
        <ResponsiveReactGridLayout
            ref="rrgl"
            layouts={this.props.grid}
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
}
            // {...this.props}

GridView.propTypes = {
  // grid     : React.PropTypes.array.isRequired,
  update   : React.PropTypes.func.isRequired
}


        // <button onClick={this.resetLayout}>Reset Layout</button>

// export const GridView = () => (
//   <ResponsiveLocalStorageLayout />
// )

// export default GridView

// function getFromLS(key) {
//   let ls = {};
//   if (global.localStorage) {
//     try {
//       ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {};
//       // console.log('getFromLS');
//     } catch(e) {/*Ignore*/}
//   }
//   return ls[key];
// }

// function saveToLS(key, value) {
//   if (global.localStorage) {
//     global.localStorage.setItem('rgl-8', JSON.stringify({
//       [key]: value
//     }));
//     // console.log('saveToLS');
//   }
// }
