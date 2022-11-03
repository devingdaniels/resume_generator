import React, { Component } from 'react'

// Styles
import './styles/App.css'

// Components
import Header from './components/Header'
import Personal from './components/Personal'
import Education from './components/Education'
import Experience from './components/Experience'
import Resume from './components/resume/ResumePage'
import Footer from './components/Footer'


class App extends Component {
  constructor() { 
    super()
    // State variable
    this.state = {
      personal: {},
      education: [],
      experience: []
    }
    // Method getting passed to child component
    this.getPerInfo = this.getPerInfo.bind(this)
    this.getEdInfo = this.getEdInfo.bind(this)
    // this.getExpInfo = this.getExpInfo.bind(this)
  }
  // CLASS METHODS
 
//    // Method to get personal info from Personal Component state
  getPerInfo = (info) => { 
    this.setState({
      personal: info
    })
  }
  // Method to get education info from Education Component state
  getEdInfo = (info) => {
    this.setState({
      education: info
    })
  }
// // Method to get education info from Education Component state
  getExpInfo = (info) => {     
    this.setState({
      experience: info
    })
  }
  

  render() {
    return (
      <>
        <Header/>
        <main>
          <Personal updatePerInfo={this.getPerInfo}/>
          <Experience updateExInfo={this.getExpInfo}/>
          <Education updateEdInfo={this.getEdInfo}/>                                    
          <Resume personal={ this.state.personal } education={this.state.education} experience={this.state.experience}/> 
        </main>
        <Footer/>
      </>
    )
  }
}

export default App

