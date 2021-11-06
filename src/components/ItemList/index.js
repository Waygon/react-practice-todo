import React,{Component} from 'react'
import Item from '../Item'
import './index.css'

export default class ItemList extends Component {
  render() {
    return (
      <div className="itemList-container middle-container">
        <Item/>
      </div>
    )
  }
}
