import React, { Component } from 'react'

import uniqid from "uniqid";

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
                    {this.props.educationInfo.map((element) => {                           
                        return (                            
                        <div key={element.id}>
                            <li>{element.info.school}</li>
                            <li>{element.info.degree}</li>
                            <li>{element.info.gpa}</li>
                        </div>
                            
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
