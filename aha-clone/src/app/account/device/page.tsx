import React from 'react'
import Image from 'next/image'
import './styles.scss'

// Dummy device data – replace with real data from backend or Redux
const deviceList = [
  {
    name: 'web',
    isCurrentDevice: true,
    status: 'Active',
  },
  {
    name: 'web',
    isCurrentDevice: false,
    status: 'a day ago',
  },
  {
    name: 'samsungtizentv',
    isCurrentDevice: false,
    status: 'a day ago',
  },
]

const DeviceManagement = () => {
  return (
    <section className="device-sec">
      <div className="header">
        <div className="arrow">
          <Image src="/Assets/icons/profilemenu/chevron-left.788b17bac00f11f9 (1).svg" alt="Back-arrow" width={20} height={20} />
        </div>
        <h1>Device Management</h1>
      </div>

      <div className="container">
        <div className="block-25"></div>

        <div className="d-ctn">
          <div className="device-container">
            {deviceList.map((device, index) => (
              <div
                className={`device-cont ${
                  device.name === 'web' && device.isCurrentDevice ? 'device-web' : ''
                }`}
                key={index}
              >
                <div className="device">
                  <div className="device-title">
                    <span className="title-text">{device.name}</span>
                    {device.isCurrentDevice && (
                      <span className="title-text"> (This Device)</span>
                    )}
                    <br />
                    <span className="below-text">{device.status}</span>
                  </div>

                  <div className="device-action">
                    {!device.isCurrentDevice && (
                      <button className="btn">
                        <Image
                          src="/Assets/icons/profilemenu/remove-icon.31a9ab728f955911.svg"
                          alt="Delete-button"
                          width={18}
                          height={18}
                        />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeviceManagement
