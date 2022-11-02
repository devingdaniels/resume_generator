import React, { Component } from 'react'

export class EducationForm extends Component {
   constructor(props) { 
     super(props)
     // State variable 
     this.state = {
       info: {
         school: '',
         degree: '',
         gpa: ''
       }
     }
   }
  
  handleOnChange = (e) => { 
    // Dynamically update the property 
    this.setState({
      info: {
        ...this.state.info, 
        [e.target.id] : e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    // Prevent page reload
    e.preventDefault()
    // Form submitted, update the state with confirmed values and pass the info back to App.js
    this.setState({
      info: {
          school: this.state.info.school,
          degree: this.state.info.degree,
          gpa: this.state.info.gpa
      }
    })
    // Make the function call to pass back updated object
    this.props.getEducationInfo(this.state.info)
  }
  clearForm = () => { 
    this.setState({
      info: {
         school: '',
         degree: '',
         gpa: ''
       }
    })
  }
  render() {
    const { school, degree, gpa } = this.state.info
    return (
      <div>         
        <form onSubmit={this.handleSubmit}>        
          <input
            type="text"
            id='school'
            value={school}
            placeholder={'School'}            
            onChange={ this.handleOnChange }
          />          
          <input
            type="text"
            id='degree'
            value={degree}
            placeholder={'Degree'}
            onChange={ this.handleOnChange }
          />          
          <input
            type="text"
            id='gpa'
            value={gpa}
            placeholder={'GPA'}
            onChange={ this.handleOnChange }
          />
          <button type='submit'>Add to Resume</button>
          <button onClick={this.clearForm}>Clear Info</button>
        </form>
      </div>
    )
  }
}

export default EducationForm

