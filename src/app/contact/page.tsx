import React from 'react'
import cssStyle from "./contact.module.css"

console.log(cssStyle,"CSS-Style")

const ContactPage = () => {
  return (
    <div>
       <h2 className={cssStyle.yellow}>This is our Contact Page</h2>
       <p className={cssStyle.black}>Contact me at [ Mohsinraza22@gmail.com ]</p>
    </div>
  )
}

export default ContactPage
