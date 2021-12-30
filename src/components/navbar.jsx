import {React, useState} from 'react'

// The eslint-disable-next-line is necessary because these are <a> and not <button> so tons of warnings pop up.
//I'm a bit lazy to fix this because it would involve fixing the css styling and this works as it is
const Navbar = () => {
    const [responsiveClass, setResponsive] = useState("inactive");

    function scrolling(id) {
        if (responsiveClass === "is-responsive") {
            setResponsive('inactive');
        }
		document.getElementById(id).scrollIntoView({behavior: "smooth"});
	}

    function toggleBurger() {
        console.log("Burger clicked");
        if (responsiveClass === "inactive") {
            setResponsive('is-responsive');
        } else {
            setResponsive('inactive');
        }
    }

    return(
        <nav className={`navbar ${responsiveClass}`} id="navbar">
            {/* eslint-disable-next-line */}
            <a className="nav-link" onClick={() => scrolling('header')}><img className="logo-nav" src={process.env.PUBLIC_URL + '/robotics_logo.png'} alt="UCSB Robotics"/></a>
            {/* eslint-disable-next-line */}
            <a className="nav-link" onClick={() => scrolling('about')}><span>About</span></a>
            {/* eslint-disable-next-line */}
            <a className="nav-link" onClick={() => scrolling('competitions')}><span>Competitions</span></a>
            {/* eslint-disable-next-line */}
            {/* <a className="nav-link" onClick={() => scrolling('projects')}><span>Projects</span></a> */}
            {/* eslint-disable-next-line */}
            <a className="nav-link" onClick={() => scrolling('officers')}><span>Officers</span></a>
            {/* eslint-disable-next-line */}
            <a className="nav-link" onClick={() => scrolling('outreach')}><span>Outreach</span></a>
            {/* eslint-disable-next-line */}
            <a className="nav-link" onClick={() => scrolling('videos')}><span>Technical Videos</span></a>
            {/* eslint-disable-next-line */}
            <a className="nav-link" onClick={() => scrolling('photos')}><span>Photos</span></a>
            {/* eslint-disable-next-line */}
            <a className="nav-link" onClick={() => scrolling('contact')}><span>Contact</span></a>
            {/* <a className="nav-link" href="https://ucsbesc.square.site/shop/alche/6" target="_blank" rel="noopener noreferrer"><span>Merch</span></a> */}
            <div className={`hamburger ${responsiveClass}`} id="hamburger" onClick={() => toggleBurger()}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </nav>
    )

}

export default Navbar