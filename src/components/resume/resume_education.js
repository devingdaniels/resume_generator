import React, { Component } from 'react'

class ResumeEducation extends Component {
    constructor(props) { 
        super(props)
    }
  render() {
    return (
        <section >
            <h2>Education</h2>
            <div className='educationInfo'>
            {this.props.education.map((element) => {                           
                return (
                    <article key={element.id} className='resumeArticle' >
                        <p><b>School: </b>{element.info.school}</p>
                        <p><b>Degree: </b>{element.info.degree}</p>
                        <p><b>GPA: </b>{element.info.gpa}</p>
                    </article>                            
                        )
            })}    
            </div>
      </section>
    )
  }
}

export default ResumeEducation