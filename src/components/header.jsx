import React from 'react'

const Header = () => {
    
    return(
        <div className="header" id="header">
            <img id="header-image" className="header-image" src={process.env.PUBLIC_URL + 'header-smallbig.jpg'} alt="UCSB Robotics Website"/>
            <div className="header-text-container">
                <div className="header-title">
                    <img className="logo" src={process.env.PUBLIC_URL + 'robotics_logo.png'} alt="UCSB Robotics"/>
                    <span className="website-title">&nbsp;UCSB Robotics Club</span>
                </div>
            </div>
        </div>
    )
}

export default Header