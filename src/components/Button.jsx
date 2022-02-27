import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, link}) => {
  return (
    <>
        <Link to={`/${link}`} className="">{text}</Link>
    </>
  )
}

export default Button