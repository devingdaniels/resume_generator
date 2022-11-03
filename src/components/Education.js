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
  }

  createData = (info) => {       
    // Setting state directly is bad
    // But, can't figure out why setting info in setState is not updating properly
    this.state.educationData.push(info)
    this.setState({      
      formComponents: [...this.state.formComponents],
    })
    // Forward the education data [] to App.js --> so can be rendered in Resume component    
     this.props.updateEdInfo(this.state.educationData)    
    }
 
  
  createForm = () => {     
    this.setState({
      formComponents: [...this.state.formComponents, <EducationForm addItem={this.createData } id={ uniqid()}></EducationForm> ]
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

export default Education

// // Determine if user created new object or edited previous     
//     if (this.state.educationData.find(el => el.id === info.id)) { 
//       const newState = this.state.educationData.map(obj => {
//       // If info === existing info, replace
//       if (obj.id === info.id) {
//         return info
//       }
//       // else add previous object
//       return obj;
//       });
//       // Update state
//       console.log(newState)
//       this.setState({
//         educationData: [...this.state.educationData, newState],
//         formComponents: [...this.state.formComponents]
//       })
//     }
//     else
//     {
//       // Unique info object, simply add to existing array of info objects
//       console.log(info)
//       this.setState({
//         educationData: [...this.state.educationData, info],
//         formComponents: [...this.state.formComponents]        
//       })
//     } 