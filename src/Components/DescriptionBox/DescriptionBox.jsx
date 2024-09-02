import React from 'react'
import "./DescriptionBox.css"
const DescriptionBox = () => {
  return (
    <div className='descbox'>
      <div className="descbox-navigator">
        <div className="descbox-nav-box">
             Description
        </div>
        <div className="descbox-nav-box fade"> Reviews (122)</div>
      </div>
      <div className="descbox-desc">
        <p>An e-commerce websiteis  a online platform that facilitate buying and selling of products or services over the internet serve a virtual maerketplace where businesses and individual showcase their products.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
