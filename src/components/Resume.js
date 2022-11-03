import React, { Component } from 'react'


class Resume extends Component {

    constructor(props) { 
        super(props)
    }


    render() {     

        return (            
            <section>
                <h1>Resume</h1>                
                <ul>                    
                    {this.props.edInfo.map((element) => {                           
                        return (                            
                        <article key={element.id}>
                            <li>{element.info.school}</li>
                            <li>{element.info.degree}</li>
                            <li>{element.info.gpa}</li>
                        </article>                            
                        )
                    })} 
                </ul>
                
        </section>   
    )
  }
}

export default Resume