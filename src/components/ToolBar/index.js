import React,{Component} from 'react'
import './index.css'

export default class ToolBar extends Component {
  render() {
    return (
      <div className="toolBar-container middle-container">
        <div className="output-tracker">
          <span>done <span className="tracker-value">100</span></span>
          <span style={{margin:'0 8px'}}>/</span>
          <span>all <span className="tracker-value">100</span></span>
        </div>
        <button className="btn-clearDone">Clear Done Items</button>
      </div>
    )
  }
}
 