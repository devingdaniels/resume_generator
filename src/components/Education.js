import React, { Component, Fragment } from 'react'
// Components
import EducationForm from './EducationForm'
// Dependencies
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) { 
    super(props)

    this.state = {
      educationData: [],
      formComponents: []
    }    

    this.createData = this.createData.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  createData = (info) => {        
    // Check if info is new or update
    if (this.state.educationData.find(el => el.id === info.id)) {
      // Add previous objects to new state, replace old info with new info object with updated values 
      const newState = this.state.educationData.map(obj => { 
        // Check if current obj == info, return info
        if (obj.id === info.id) { 
          return info
        }
        // Else just return the object
        return obj
      })
      // Now have updated array with having replaced info with new info, set the state and rerender
      // setState usually happens async, so need to call prop AFTER state has been updated as callback function
      this.setState({
        educationData: newState,
        formComponents: [...this.state.formComponents]
      }, () => this.props.updateEdInfo(this.state.educationData))
    } else { 
    // Info is unique, simply update the state and rerender 
    this.setState({
      educationData: [...this.state.educationData, info],
      formComponents: [...this.state.formComponents]    
    }, () => {      
      this.props.updateEdInfo(this.state.educationData)
    })
    }
    }
 
  createForm = () => {     
    this.setState({
      formComponents: [...this.state.formComponents, <EducationForm addItem={this.createData} deleteItem={ this.deleteItem} id={ uniqid()}></EducationForm> ]
    })    
  }

  deleteItem = (data) => {     
    // Get the ID of the info object (same as EducationForm component ID)  
    const infoID = data.id    
    // Get new arrays excluding the info object and related form component
    const newInfoState = this.state.educationData.filter(obj => obj.id !== infoID)    
    const newCompState = this.state.formComponents.filter(obj => obj.props.id !== infoID)
    // Update state and rerender 
    this.setState({
      educationData: newInfoState,
      formComponents: newCompState
    }, () =>  this.props.updateEdInfo(this.state.educationData))
  }

  render() { 
return (
      <div className='enterDataComponent'>
        <h2>Education Section</h2> 
        {this.state.formComponents.map((form) => { 
          return <div key={form.props.id}> {form} </div>
        })}
        <button onClick={this.createForm}>Add Education</button>
      </div>
    )    
  }
}

export default Education
