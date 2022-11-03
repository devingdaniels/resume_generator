import React, { Component } from 'react'
// Components
import ExperienceForm from './ExperienceForm';
// Dependencies
import uniqid from "uniqid";

class Experience extends Component {
  constructor(props) { 
    super(props)

    this.state = {
      experienceData: [],
      formComponents: []
    }    

    this.createData = this.createData.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  createData = (info) => {        
    // Check if info is new or update
    if (this.state.experienceData.find(el => el.id === info.id)) {
      // Add previous objects to new state, replace old info with new info object with updated values 
      const newState = this.state.experienceData.map(obj => { 
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
        experienceData: newState,
        formComponents: [...this.state.formComponents]
      }, () => this.props.updateExInfo(this.state.experienceData))
    } else { 
    // Info is unique, simply update the state and rerender 
    this.setState({
      experienceData: [...this.state.experienceData, info],
      formComponents: [...this.state.formComponents]    
    }, () => {      
      this.props.updateExInfo(this.state.experienceData)
    })
    }
    }
 
  createForm = () => {     
    this.setState({
      formComponents: [...this.state.formComponents, <ExperienceForm addItem={this.createData} deleteItem={ this.deleteItem} id={ uniqid()}></ExperienceForm> ]
    })    
  }

  deleteItem = (data) => {     
    // Get the ID of the info object (same as ExperienceForm component ID)  
    const infoID = data.id    
    // Get new arrays excluding the info object and related form component
    const newInfoState = this.state.experienceData.filter(obj => obj.id !== infoID)    
    const newCompState = this.state.formComponents.filter(obj => obj.props.id !== infoID)
    // Update state and rerender 
    this.setState({
      experienceData: newInfoState,
      formComponents: newCompState
    }, () =>  this.props.updateExInfo(this.state.experienceData))
  }

  render() { 
return (
      <div className='enterDataComponent'>
        <h2>Experience</h2>
        {this.state.formComponents.map((form) => { 
          return <div key={form.props.id}> {form} </div>
        })}
        <button onClick={this.createForm}>Add Experience</button>
      </div>
    )    
  }
}

export default Experience
