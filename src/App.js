import React, { Component } from 'react'

// Components
import Personal from './components/Personal'
import Education from './components/Education'
// import Work from './components/Work'
import Resume from './components/Resume'



export default class App extends Component {
  constructor() { 
    super()
    // State variable
    this.state = {
      personalInfo: {},
      educationInfo: {}
    }
    // Method getting passed to child component
    this.getPersonInfo = this.getPersonInfo.bind(this)
    this.getEducationInfo = this.getEducationInfo.bind(this)
  }

  // Method to get personal info from Personal Component state
  getPersonInfo = (info) => { 
    this.setState({
      personalInfo: info
    })
  }


  getEducationInfo = (info) => { 
    this.setState({
      educationInfo: info
    })
  }


  clearForm = () => { 
    this.setState({      
      personalInfo: {},
      educationInfo: {}      
    })
  }


  render() {
    return (
      <div>
        <Personal getPersonInfo={this.getPersonInfo} ></Personal>
        <Education getEducationInfo={this.getEducationInfo }/>
        <Resume personalInfo={this.state.personalInfo} educationInfo={this.state.educationInfo} />
        
        <button onClick={this.clearForm}>Clear Form</button>
      </div>
    )
  }
}
