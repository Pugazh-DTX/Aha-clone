'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import arrow from '../../../../public/Assets/icons/profilemenu/chevron-left.788b17bac00f11f9 (1).svg'
import './style.scss'

const Subscription = () => {
  const [isEditing, setIsEditing] = useState(false)

  const handleAddClick = () => {
    setIsEditing(true)
  }

  const handleCancelClick = () => {
    setIsEditing(false);
  };



  return (
    <div className="sub-details">
      {!isEditing ? (
        <>
          <section className="sub">
            <div className="sub-head">
              <div className="back-arrow">
                <Image src={arrow} alt="back-arrow" width={20} height={20} />
              </div>
              <h1>Subscription & Rentals</h1>
            </div>

            <div className="sub-ctn">
              <div className="ctn-head">
                <h4>Subscription Details</h4>
              </div>

              <div className="sub-empty">
                <div className="sub-empty-text">No Active Subscriptions</div>
                <div className="sub-emt-btn">
                  <button className="primary-btn">Subscribe Now</button>
                </div>
              </div>
            </div>
          </section>

          <div className="sub-ctn-btn">
            <div className="sub-cancel"></div>
            <button className="out-btn" onClick={handleAddClick} tabIndex={0}>
              View Invoice(s)
            </button>
          </div>
        </>
      ) : (
        <section className="sub2">
          <div className="header">
            <div className="arrow-icon">
              <Image
              src={arrow}
              alt='Back-Arrow'
              width={20} 
              height={20} 
              onClick={handleCancelClick}
              />
            </div>
            <h1>Invoice(s)</h1>
          </div>
        </section>
      )}
    </div>
  )
}

export default Subscription
