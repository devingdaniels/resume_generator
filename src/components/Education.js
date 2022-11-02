import React, { Component } from 'react'


import EducationForm from './EducationForm'

export default class Education extends Component {
  constructor(props) { 
    super(props)

    this.state = {      
      formComponents: []
    }
  }

  createForm = () => { 
    this.setState({
      formComponents: [...this.state.formComponents, <EducationForm getEducationInfo={ this.props.getEducationInfo }></EducationForm> ]
    })    
  }

  render() { 
    return (
      <div>
        <h1>Education Section</h1>
        {this.state.formComponents.map((form, index) => { 
          return <div key={index} >{form}</div>
        })}
        <button onClick={this.createForm}>Add Education</button>
      </div>
    )    
  }
}