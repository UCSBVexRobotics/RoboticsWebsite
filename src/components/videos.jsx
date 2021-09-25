import {React, useState, useEffect} from 'react'
import PasswordForm from './passwordform'
import VideoLibrary from './videolibrary'


// This component is the main component for the rendering of the videos and is further comprised of the "videocontainer" and the "passwordform" component
// The user will see the "videocontainer" component if they have correctly entered the password on our website.

const Videos = () => {

    const [hasVideopassword, setPasswordstatus] = useState(false);

    // Have the website remember when the user has successfully inputted in the password
    useEffect(() => {
        // if (localStorage.getItem('passwordStatus')) {
        //     setPasswordstatus(localStorage.getItem('passwordStatus'))
        // }
    },[])

    return (
        <div className="videos">
            <h3 id="videos">TECHNICAL VIDEOS</h3>
            {hasVideopassword ? <VideoLibrary/> 
            : <PasswordForm setPasswordstatus={(status) => setPasswordstatus(status)}/>}
        </div>
    )
}

export default Videos