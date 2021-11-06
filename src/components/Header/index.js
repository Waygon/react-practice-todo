import React,{Component} from 'react'
import './index.css'

export default class Hearder extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-title">Keep tracking on your missions!</div>
        <div className="input-addnew-wrapper middle-container">
          <input className="input-addnew" placeholder="Things to remember..."/>
          <button onClick={() => console.log("Clicked")} className="btn-addnew">+</button>
        </div>
      </div>
    )
  }
}
