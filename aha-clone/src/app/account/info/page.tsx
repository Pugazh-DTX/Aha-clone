'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import user from '../../../../public/Assets/icons/user-icon.a6b5f30360c95e43.svg';
import arrow from '../../../../public/Assets/icons/chevron-left.788b17bac00f11f9.svg';
import flag from '../../../../public/Assets/icons/Flag_of_India.svg';
import './styles.scss';
import DatePickerSimple from '@/components/atoms/Datepicker';
import GenderSelectSimple from '@/components/atoms/Genderpicker';
import InputBox from '@/components/atoms/Inputbox';

const InfoPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleAddClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    setShowPopup(true);
    setIsEditing(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="profile-setup">
      {/* Conditionally Render Section 1 or Section 2 */}
      {!isEditing ? (
        // ---------- Section 1 (View Mode) ----------
        <section className="profile-section">
          <div className="profile-first-name">
            <div className="profile-avatar">
              <Image
                src={user}
                alt="Profile"
                width={48}
                height={48}
              />
            </div>
            <h2>Pugazhendhi</h2>
          </div>

          <div className="profile-first-blocks">
            <div className="block-info">
              <p className="block-info-title">Phone Number</p>
              <p className="block-info-value">+91 9876543210</p>
            </div>

            <div className="block-info">
              <p className="block-info-title">Email ID</p>
              <p className="block-info-value">Add Email</p>
            </div>
          </div>

          <div className="profile-button">
            <button className="btn1" onClick={handleAddClick}>
              Edit
            </button>
          </div>
        </section>
      ) : (
        // ---------- Section 2 (Edit Mode) ----------
        <section className="profile-section">
          <div className="profile-2-header">
            
            <Image
              src={arrow}
              alt="Back"
              width={20}
              height={20}
              className="arrow-img"
              onClick={handleCancelClick}
            />
            <h1>Edit Account</h1>
          </div>

          <div className="profile-2-container">
            <p>You can edit your profile details here</p>

            <form className="form">
              <div className="form-cols">
                <div className="profile-form">
                  <div className="form-control">
                    <label className="form-label">Enter Name</label>
                    <InputBox type="text" name="firstName" placeholder="Name" maxLength={15} />
                  </div>

                  <div className="form-control">
                    <label className="form-label">Phone Number</label>
                    <div className="phone-input-wrapper">
                      <InputBox
                        type="text"
                        placeholder="Phone Number"
                        leftIcon={
                          <>
                            <Image src={flag} alt="Flag" width={24} height={16} />
                            <span style={{ marginLeft: '6px', fontSize: '14px', color: 'white' }}>+91</span>
                            <div className="divider" />
                          </>
                        }
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="form-label">Enter Email</label>
                    <InputBox type="text" name="email" id="email" placeholder="Email" />
                  </div>
                </div>

                <div className="demographic-form">
                  <div className="form-control">
                    <label className="form-label">Date of Birth</label>
                    <DatePickerSimple />
                  </div>

                  <div className="form-control select-gender">
                    <label className="form-label">Gender</label>
                    <GenderSelectSimple />
                  </div>
                </div>
              </div>

              <div className="form-container-buttons">
                <div className="form-btn">
                  <button className="outline-button" type="button" onClick={handleCancelClick}>
                    Cancel
                  </button>
                  <button className="primary-button" type="button" onClick={handleSaveClick}>
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* Popup for successful save */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>Profile updated successfully! 🎉</p>
            <button onClick={handleClosePopup}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoPage;
