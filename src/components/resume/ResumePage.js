/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'

// Components
import ResumePersonal from './resume_personal'
import ResumeEducation from './resume_education'
import ResumeExperience from './resume_experience'

class Resume extends Component {
    constructor(props) { 
        super(props)
    }
    render() {             
        return (            
            <section className='resumePage'>
                <ResumePersonal personal={this.props.personal}></ResumePersonal>
                <ResumeEducation education={ this.props.education} ></ResumeEducation>                
                <ResumeExperience experience={ this.props.experience}></ResumeExperience>            
            </section>  
    )
  }
}

export default Resume