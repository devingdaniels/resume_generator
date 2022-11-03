import React, { Component } from 'react'

class ResumeExperience extends Component {
    constructor(props) { 
        super(props)
    }
  render() {
    return (
    <section>
    <h2>Experience</h2>
    <div className='experienceInfo'>
        {this.props.experience.map((element) => {
        return (
        <article key={element.id} className='resumeArticle'>
            <p><b>Position: </b>{element.info.position}</p>
            <p><b>Company: </b>{element.info.company}</p>
            <p><b>City: </b>{element.info.city}</p>
            <p><b>From: </b>{element.info.from}</p>
            <p><b>To: </b>{element.info.to}</p>
        </article>
        )})} 
    </div>
    </section>   
    )
  }
}

export default ResumeExperience