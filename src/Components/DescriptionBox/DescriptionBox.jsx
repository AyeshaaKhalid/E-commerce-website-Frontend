import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
      <div className=' descriptionbox-description'>
        <p>E-commerce refers to the buying and selling of goods and services over the internet.
          It allows businesses to reach a global audience, offering convenience and accessibility to consumers.
          E-commerce platforms enable seamless transactions, from browsing products to making payments and tracking orders.
          With the rise of mobile technology and digital marketing, e-commerce has transformed the retail landscape,
          providing endless opportunities for growth and innovation. </p>
        
      </div>




    </div>
  )
}

export default DescriptionBox;