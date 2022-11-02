import React, { Component } from 'react'

export class Personal extends Component {
    constructor(props)
    { 
         super(props)
    // State variables
        this.state = { 
            info: {
                fName: '',
                lName: '',
                email: '',
                phone: ''
            }                
        }
    }
    
// Class methods
// Purpose to store latest values entered by user, on submit then uses those values to update the state
   handleChange = (e) => {       
        this.setState({
             // Dynamically update the current value triggered by onChange           
            info: {
                ...this.state.info, 
                [e.target.id]: e.target.value 
            }
        })       
    }
    
    onSubmit = (e) => { 
        // Take the value last edited from handleChange and update the state
        // Prevent page refresh 
        e.preventDefault()
        // Update the state variable
        this.setState({     
            info: {
                fName: this.state.info.fName,
                lName: this.state.info.lName,
                email: this.state.info.email,
                phone: this.state.info.phone            
            }              
        })
        // Print the state info{} after submit
        // console.log(`First: ${this.state.info.fName}, Last: ${this.state.info.lName}, Email: ${this.state.info.email}, Phone: ${this.state.info.phone}`)
        // Pass the info{} back to App.js
        this.props.getPersonInfo(this.state.info)
    }


    render() {
      // Create access to state variables using destructuring 
        const { fName, lName, email, phone } = this.state.info
    // Return the component 
    return (
        <div>
            <form onSubmit={this.onSubmit}>
                
                <label htmlFor="fName">First:</label>
                <input
                    type="text"
                    id='fName'
                    value={fName}
                    onChange={this.handleChange}
                    // required
                />
                
                <label htmlFor="lName">Last</label>
                <input
                    type="text"
                    id='lName'
                    value={lName}
                    onChange={this.handleChange}
                    // required
                />
                

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id='email'
                    value={email}
                    onChange={this.handleChange}
                    // required
                />
                

                <label htmlFor="phone">Phone</label>
                <input
                    type="tel"
                    id='phone'
                    value={phone}
                    onChange={this.handleChange}
                    // required
                />
                

          <button type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

export default Personal
