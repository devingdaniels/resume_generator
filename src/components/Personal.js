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
        this.props.updatePerInfo(this.state.info)
    }

    clearForm = () => { 
    this.setState({
      info: {
                fName: '',
                lName: '',
                email: '',
                phone: ''
            }       
    })
  }

    render() {
      // Create access to state variables using destructuring 
        const { fName, lName, email, phone } = this.state.info
    // Return the component 
    return (
        <div className='enterDataComponent'>
            <h2>Contact</h2>
            <form onSubmit={this.onSubmit}>
                                
                <input
                    type="text"
                    id='fName'
                    value={fName}
                    placeholder={'First'}
                    onChange={this.handleChange}
                    // required
                />
                                
                <input
                    type="text"
                    id='lName'
                    value={lName}
                    placeholder={'Last'}
                    onChange={this.handleChange}
                    // required
                />
                
                
                <input
                    type="email"
                    id='email'
                    value={email}
                    placeholder={'Email'}
                    onChange={this.handleChange}
                    // required
                />
                                
                <input
                    type="tel"
                    id='phone'
                    value={phone}
                    placeholder={'Phone'}
                    onChange={this.handleChange}
                    // required
                />
                

                <button type='submit'>Add to Resume</button>
                <button onClick={this.clearForm}>Remove Info</button>
        </form>
      </div>
    )
  }
}

export default Personal
