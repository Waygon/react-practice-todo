import React,{Component} from 'react'
import './index.css'

export default class ToolBar extends Component {

  handleCheckAll = (isDone) => {
    return () => {
      this.props.checkAllItem(isDone)
    }
  }

  handleClearDoneItems = () => {
    if(!window.confirm("Are you sure you want to clear all done item")) return
    this.props.clearDoneItems();
  }
  
  render() {
    const {todoItems} = this.props
    const total = todoItems.length
    const isDoneCount = todoItems.reduce((prev,itemObj) => prev + (itemObj.isDone? 1:0),0)
    const allChecked = total===isDoneCount && total!==0

    return (
      <div className="toolBar-container middle-container">
        <div className="output-tracker">
          <div className="checkbox" style={{backgroundColor: allChecked ? '#0DA8CA':'#BEBEBE'}} onClick={this.handleCheckAll(!allChecked)}></div>
          <span>done <span className="tracker-value">{isDoneCount}</span></span>
          <span style={{margin:'0 8px'}}>/</span>
          <span>all <span className="tracker-value">{total}</span></span>
        </div>
        <button className="btn-clearDone" onClick={this.handleClearDoneItems}>Clear Done Items</button>
      </div>
    )
  }
}
 