import React, { Component } from 'react'


class ExperienceForm extends Component {
   
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
    // Form submitted, update the state with confirmed values and pass the info back to App.js
    this.setState({
      info: {
          position: this.state.info.position,
          company: this.state.info.company,
          city: this.state.info.city,
          from: this.state.info.from,
          to: this.state.info.to
      },
      id: this.state.id
    })
    // Make the function call to pass back updated object
    this.props.addItem(this.state)
  }

 clearForm = () => { 
    this.props.deleteItem(this.state)
  }


  render() {

    const { position, company, city, from, to } = this.state.info

    return (
      <div> 
        <h1>Experience</h1>
        <form onSubmit={this.handleSubmit}>
          
          <input
            type="text"
            id='position'
            value={position}
            placeholder={'Position'}
            onChange={this.handleOnChange}
            required
          />
          
          <input
            type="text"
            id='company'
            value={company}
            placeholder={'Company'}
            onChange={this.handleOnChange}
            required
          />
          
          <input
            type="text"
            id='city'
            value={city}
            placeholder={'City'}
            onChange={this.handleOnChange}
            required
          />
          
          <input
            type="date"
            id='from'
            value={from}            
            onChange={this.handleOnChange}
            required
          />
          
          <input
            type="date"
            id='to'
            value={to}            
            onChange={this.handleOnChange}
            required
          />

          <button type='submit'>Add to Resume</button>
          <button onClick={this.clearForm}>Delete Experience</button>

        </form>
      </div>
    )
  }
}

export default ExperienceForm
