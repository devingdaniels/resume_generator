import React, { Component } from 'react'

export default class Resume extends Component {

    constructor(props) { 
        super(props)
    }


    render() {

        const { fName, lName, email, phone } = this.props.personalInfo
        const { school, degree, gpa } = this.props.educationInfo   
        const { position, company, city, from, to } = this.props.experienceInfo       

        return (            
            <div>                
                <h1>Resume</h1>
                <p>First:{fName}</p>
                <p>Last:{lName}</p>
                <p>Email:{email}</p>
                <p>Phone:{phone}</p>
                <p>School:{school}</p>
                <p>Degree:{degree}</p>
                <p>GPA:{gpa}</p>
                <p>Position:{position}</p>
                <p>Company:{company}</p>
                <p>City:{city}</p>
                <p>From:{from}</p>
                <p>To:{to}</p>                
        </div>
    )
  }
}
