import React,{Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './index.css'

export default class Item extends Component {
  state = {mouseIn: false,isDeleted: false}

  handleMouseInOut = (flag) => {
    return () => {
      this.setState({mouseIn:flag})
    }
  }

  handleCheck = (id,changedCheck) => {
    return () => {
      this.props.updateItemIsDone(id,changedCheck);
    }
  }

  handleDelete = (id) => {
    return () => {
      if(!window.confirm("Are you sure you want to delete the item?")) return
      this.setState({isDeleted:true})
      setTimeout(() => this.props.deleteItem(id),100);
    }
  }

  render() {
    const {id,content,date,isDone} = this.props
    const {mouseIn,isDeleted} = this.state

    return (
      <div className={`${(isDone? "item-container checked":"item-container")} ${(isDeleted?"deleted":"")}`} onMouseEnter={this.handleMouseInOut(true)} onMouseLeave={this.handleMouseInOut(false)}>
        <div className="item-leftWrapper">
          <div className="checkbox" style={{backgroundColor: isDone ? '#0DA8CA':'white'}} onClick={this.handleCheck(id,!isDone)}></div>
          <div style={{display: 'inline-block'}}>
            <div className="item-content">{content}</div>
            <div className="item-date">{date}</div>
          </div>
        </div>
        <FontAwesomeIcon icon={faTrash} className="btn-deleteItem" onClick={this.handleDelete(id)}
          style={mouseIn ? {opacity: 1,pointerEvents: 'all'}:{opacity: 0,pointerEvents: 'none'}}/>
      </div>
    )
  }
}
