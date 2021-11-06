import React,{Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './index.css'

export default class Item extends Component {

  render() {
    return (
      <div className="item-container">
        <div className="item-leftWrapper">
          <div className="item-checkbox"></div>
          <div style={{display: 'inline-block'}}>
            <div className="item-content">Some todo task here.</div>
            <div className="item-date">11 November 2021 9:16 PM</div>
          </div>
        </div>
        <FontAwesomeIcon icon={faTrash} className="btn-deleteItem"/>
      </div>
    )
  }
}
