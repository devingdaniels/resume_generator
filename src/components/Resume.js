import React, { Component } from 'react'

export default class Resume extends Component {

    constructor(props) { 
        super(props)
    }


    render() {

        const { fName, lName, email, phone } = this.props.personalInfo
        

        return (            
            <div>                
                <h1>Hello from Resume</h1>
                <p>First:{fName}</p>
                <p>Last:{lName}</p>
                <p>Email:{email}</p>
                <p>Phone:{phone}</p>
        </div>
    )
  }
}
