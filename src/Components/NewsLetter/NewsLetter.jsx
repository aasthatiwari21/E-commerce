import React from 'react'
import "./NewsLetter.css"
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" name="email" id="" placeholder='Enter Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
