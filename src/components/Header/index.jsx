import React,{Component} from 'react'
import { nanoid } from 'nanoid'
import './index.css'

export default class Hearder extends Component {
  handleBtnClicked = () => {
    //Get input element
    const {inputAddNew} = this

    //Input cannot be empty
    if(inputAddNew.value.trim() === ""){
      alert("Cannot add empty item!")
      return
    }

    //Initialize a new todo item
    const itemObj = {id:nanoid(),content:inputAddNew.value,date:this.formatDate(new Date()),isDone:false}

    //Add into state
    this.props.addTodoItem(itemObj)

    //Clear input
    inputAddNew.value = ""
  }

  handleKeyUp = (event) => {
    const {keyCode,target} = event

    if(keyCode !== 13) return

    if(target.value.trim() === ""){
      alert("Cannot add empty item!")
      return
    }

    //Initialize a new todo item
    const itemObj = {id:nanoid(),content:target.value,date:this.formatDate(new Date()),isDone:false}

    //Add into state
    this.props.addTodoItem(itemObj)

    //Clear input
    target.value = ""
  }

  formatDate = (date) => {
    var monthString = `${date.toLocaleString('default',{month: 'long'})}`
    var hours12 = date.getHours() % 12;
    var ampm = hours12 >= 12 ? 'PM' : 'AM'

    hours12 = hours12 ? hours12 : 12;

    return `${date.getDate()} ${monthString} ${date.getFullYear()} ${hours12}:${date.getMinutes()} ${ampm}`
  }

  render() {
    return (
      <div className="header-container">
        <div className="header-title">Keep tracking on your missions!</div>
        <div className="input-addnew-wrapper middle-container">
          <input ref={c=>this.inputAddNew = c} onKeyUp={this.handleKeyUp} className="input-addnew" placeholder="Things to remember..."/>
          <button onClick={this.handleBtnClicked} className="btn-addnew">+</button>
        </div>
      </div>
    )
  }
}
