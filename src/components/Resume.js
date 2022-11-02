import React, { Component } from 'react'

export default class Resume extends Component {

    constructor(props) { 
        super(props)
    }


    render() {

        const { fName, lName, email, phone } = this.props.personalInfo        
        const { position, company, city, from, to } = this.props.experienceInfo       

        return (            
            <div>                
                <h1>Resume</h1>
                <p>First:{fName}</p>
                <p>Last:{lName}</p>
                <p>Email:{email}</p>
                <p>Phone:{phone}</p>
                
                <ul>
                    {this.props.educationInfo.map((info, index) => { 
                        return (
                            <>
                                <li key={index}>{info.school}</li>
                                <li key={index}>{info.degree}</li>
                                <li key={index}>{info.gpa}</li>
                            </>
                        )
                    })} 
                </ul>
                
                <p>Position:{position}</p>
                <p>Company:{company}</p>
                <p>City:{city}</p>
                <p>From:{from}</p>
                <p>To:{to}</p>                
        </div>
    )
  }
}
