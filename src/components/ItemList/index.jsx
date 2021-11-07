import React,{Component} from 'react'
import Item from '../Item'
import './index.css'

export default class ItemList extends Component {
  render() {
    const {todoItems,updateItemIsDone,deleteItem} = this.props
    return (
      <div className="itemList-container middle-container">
        {
          todoItems.map((itemObj) => {
            return <Item key={itemObj.id} {...itemObj} updateItemIsDone={updateItemIsDone} deleteItem={deleteItem}/>
          })
        }
      </div>
    )
  }
}
