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
       },
       id: this.props.id
     }
   }
  
  handleOnChange = (e) => { 
    // Dynamically update the property 
    this.setState({
      info: {
        ...this.state.info, 
        [e.target.id] : e.target.value
      },
      id: this.state.id
    })
  }

  handleSubmit = (e) => {
    // Prevent page reload
    e.preventDefault()
    // Form submitted, update the state with confirmed values and pass the info back to Education.js
    this.setState({
      info: {
          school: this.state.info.school,
          degree: this.state.info.degree,
          gpa: this.state.info.gpa
      },
      id: this.state.id
    })
    // Pass the new new object back to Education.js    
    this.props.addItem(this.state)    
  }


  clearForm = () => { 
    this.props.deleteItem(this.state)
  }


  render() {
    const { school, degree, gpa } = this.state.info
    return (            
        <form onSubmit={this.handleSubmit}>        
          <input
            type="text"
            id='school'
            value={school}
            placeholder={'School'}            
          onChange={this.handleOnChange}
          required
          />          
          <input
            type="text"
            id='degree'
            value={degree}
            placeholder={'Degree'}
          onChange={this.handleOnChange}
          required
          />          
          <input
            type="text"
            id='gpa'
            value={gpa}
            placeholder={'GPA'}
          onChange={this.handleOnChange}
          required
          />
          <button type='submit'>Add to Resume</button>
          <button onClick={this.clearForm}>Delete Education</button>
        </form>      
    )
  }
}

export default EducationForm

