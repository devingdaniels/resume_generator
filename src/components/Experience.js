import React, { Component } from 'react'


export class Experience extends Component {
   
   constructor(props) { 
     super(props)
     // State variable 
     this.state = {
       info: {
         position: '',
         company: '',
         city: '',
         from: '',
         to: ''
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
          position: this.state.info.position,
          company: this.state.info.company,
          city: this.state.info.city,
          from: this.state.info.from,
          to: this.state.info.to
      }
    })
    // Make the function call to pass back updated object
    this.props.getExperienceInfo(this.state.info)
  }

  clearForm = () => { 
    this.setState({
      info: {
         position: this.state.info.position,
         company: this.state.info.company,
         city: this.state.info.city,
         from: this.state.info.from,
         to: this.state.info.to
       }
    })
  }


  render() {

    const { position, company, city, from, to } = this.state.info

    return (
      <div> 
        <h1>Experience</h1>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="position">Position</label>
          <input
            type="text"
            id='position'
            value={position}
            onChange={ this.handleOnChange }
          />

          <label htmlFor="company">Company</label>
          <input
            type="text"
            id='company'
            value={company}
            onChange={ this.handleOnChange }
          />

          <label htmlFor="city">City</label>
          <input
            type="text"
            id='city'
            value={city}
            onChange={ this.handleOnChange }
          />

          <label htmlFor="from">From</label>
          <input
            type="date"
            id='from'
            value={from}
            onChange={ this.handleOnChange }
          />

          <label htmlFor="to">To</label>
          <input
            type="date"
            id='to'
            value={to}
            onChange={ this.handleOnChange }
          />

          <button type='submit'>Add Info</button>
          <button onClick={this.clearForm}>Clear</button>

        </form>
      </div>
    )
  }
}

export default Experience
