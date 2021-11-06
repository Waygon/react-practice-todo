import React,{Component} from 'react'
import Hearder from './components/Header'
import ToolBar from './components/ToolBar'
import ItemList from './components/ItemList'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Hearder/>
        <ToolBar/>
        <ItemList/>
      </div>
    )
  }
}