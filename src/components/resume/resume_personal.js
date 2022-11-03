import React, { Component } from 'react'

class ResumePersonal extends Component {
    constructor(props) { 
        super(props)
    }
    render() {
      const { fName, lName, email, phone } = this.props.personal    
    return (
        <section>
            <h2>Contact</h2>
            <div className='personalInfo'>
                <p><b>{fName} {lName}</b></p>                
                <p><b>{email}</b></p>
                <p><b>{phone}</b></p>
            </div>
        </section>              
    )
  }
}


export default ResumePersonal