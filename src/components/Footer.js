import React from 'react'

const Footer = () => {
    let date = new Date().getFullYear()
  return (
    <footer>
       <p>Created &copy;<i>{date}</i><cite> Devin Daniels</cite></p>
    </footer>
  )
}

export default Footer
