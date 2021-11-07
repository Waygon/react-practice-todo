import React,{Component} from 'react'
import { nanoid } from 'nanoid'
import Hearder from './components/Header'
import ToolBar from './components/ToolBar'
import ItemList from './components/ItemList'
import './App.css'

export default class App extends Component {

  state = {
    todoItems: [
      {id:nanoid(),content:"Buy some body shampoo",date:"6 November 2021 9:16 PM",isDone:true},
      {id:nanoid(),content:"Buy some milk",date:"6 November 2021 9:16 PM",isDone:false},
      {id:nanoid(),content:"Buy some bread",date:"6 November 2021 9:16 PM",isDone:false},
      {id:nanoid(),content:"Buy some cookie",date:"6 November 2021 9:16 PM",isDone:false},
    ]
  }

  addTodoItem = (itemObj) => {
    //Get ori todoItems
    const {todoItems} = this.state
    //Add new item into clone list
    const newTodoItems = [itemObj,...todoItems]
    //Update state
    this.setState({todoItems:newTodoItems})

  }

  updateItemIsDone = (id,isDone) => {
    //Get ori todoItems
    const {todoItems} = this.state
    //Add new item into clone list
    const newTodoItems = todoItems.map((itemObj) => {
      if(itemObj.id === id)
        return {...itemObj,isDone:isDone}
      else
        return itemObj
    })
    //Update state
    this.setState({todoItems: newTodoItems})
  }

  deleteItem = (id) => {
    //Get ori todoItems
    const {todoItems} = this.state
    //Delete item from clone list
    const newTodoItems = todoItems.filter((itemObj) => {
      return itemObj.id !== id
    })
    //Update state
    this.setState({todoItems: newTodoItems})
  }

  checkAllItem = (isDone) => {
    //Get ori todoItems
    const {todoItems} = this.state
    //Apply changes
    const newTodoItems = todoItems.map((itemObj) => {
      return {...itemObj,isDone}
    })
    //Update state
    this.setState({todoItems: newTodoItems})
  }

  clearDoneItems = () => {
    //Get ori todoItems
    const {todoItems} = this.state
    //Clear done items from clone list
    const newTodoItems = todoItems.filter((itemObj) => {
      return !itemObj.isDone
    })
    //Update state
    this.setState({todoItems: newTodoItems})
  }

  render() {
    const {todoItems} = this.state

    return (
      <div className="App">
        <Hearder addTodoItem={this.addTodoItem}/>
        <ToolBar todoItems={todoItems} checkAllItem={this.checkAllItem} clearDoneItems={this.clearDoneItems}/>
        <ItemList todoItems={todoItems} updateItemIsDone={this.updateItemIsDone} deleteItem={this.deleteItem}/>
      </div>
    )
  }
}