import React, { Component } from 'react'


import EducationForm from './EducationForm'

import uniqid from "uniqid";

export default class Education extends Component {
  constructor(props) { 
    super(props)

    this.state = {
      educationObjects: [],
      formComponents: []
    }

    this.deleteEducationObject = this.deleteEducationObject.bind(this)
  }

  createForm = () => { 
    
    this.setState({
      formComponents: [...this.state.formComponents, <EducationForm getEducationInfo={this.props.getEducationInfo} deleteEducationObject={this.deleteEducationObject} id={ uniqid()}></EducationForm> ]
    })    
  }

  deleteEducationObject = (id) => { 
    
    console.log(this.state.formComponents)
    const newState = this.state.formComponents.filter(obj => obj.props.id !== id)
         
    console.log(newState)

    this.setState({
      formComponents: newState
    })
  }
  

  render() { 
    return (
      <div>
        <h1>Education Section</h1>
        {this.state.formComponents.map((form, index) => { 
          return <div key={index}> {form} </div>
        })}
        <button onClick={this.createForm}>Add Education</button>
      </div>
    )    
  }
}