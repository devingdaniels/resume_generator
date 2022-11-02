import React, { Component } from 'react'

// Components
import Personal from './components/Personal'
// import Education from './components/Education'
// import Work from './components/Work'
import Resume from './components/Resume'



export default class App extends Component {
  constructor() { 
    super()
    // State variable
    this.state = {
      personalInfo: {}
    }
    // Method getting passed to child component
    this.getPersonInfo = this.getPersonInfo.bind(this)
  }

  getPersonInfo = (info) => { 
    this.setState({
      personalInfo: info
    })
  }


  render() {
    return (
      <div>
        <Personal getPersonInfo={this.getPersonInfo} ></Personal>        
        <Resume personalInfo= {this.state.personalInfo }/>
      </div>
    )
  }
}
