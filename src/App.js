import React, { Component } from 'react'

// Styles
import './styles/App.css'

// Components
import Header from './components/Header'
import Personal from './components/Personal'
import Education from './components/Education'
import Experience from './components/Experience'
import Resume from './components/Resume'
import Footer from './components/Footer'

class App extends Component {
  constructor() { 
    super()
    // State variable
    this.state = {
      personalInfo: {},
      educationInfo: {},
      experienceInfo: {}
    }
    // Method getting passed to child component
    this.getPersonInfo = this.getPersonInfo.bind(this)
    this.getEducationInfo = this.getEducationInfo.bind(this)
  }
  // CLASS METHODS
  // Method to get personal info from Personal Component state
  getPersonInfo = (info) => { 
    this.setState({
      personalInfo: info
    })
  }
  // Method to get education info from Education Component state
  getExperienceInfo = (info) => { 
    this.setState({
      experienceInfo: info
    })
  }
  // Method to get education info from Education Component state
  getEducationInfo = (info) => { 
    this.setState({
      educationInfo: info
    })
  }
  render() {
    return (
      <div>
        <Header></Header>
        <main>
        <section className='enterDataComponent'>
          <Personal getPersonInfo={this.getPersonInfo}></Personal>
        </section>
        <section className='enterDataComponent'>
          <Experience getExperienceInfo={this.getExperienceInfo}></Experience>
        </section>
        <section className='enterDataComponent'>
            <Education getEducationInfo={this.getEducationInfo }/>
          </section>
        <Resume personalInfo={this.state.personalInfo} experienceInfo={ this.state.experienceInfo} educationInfo={this.state.educationInfo}  />                
        </main>
        <Footer></Footer>
      </div>
    )
  }
}

export default App
