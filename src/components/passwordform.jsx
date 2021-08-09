import {React, useState} from 'react'
import dotenv from 'dotenv'

dotenv.config();

const PasswordForm = (props) => {

    const actualPassword = process.env.REACT_APP_VIDEO_LIBRARY_PASSWORD
    const [userInputpassword, setuserInputpassword] = useState("");

    function submit(e) {
        e.preventDefault()
        if (userInputpassword === actualPassword) {
            // Have the website remember when the user has successfully inputted in the password
            //localStorage.setItem('passwordStatus', true);
            props.setPasswordstatus(true);
        } else {
            alert("Incorrect password!"); // Temporary solution
        }
        
    }

    return (
        <div>
            <p className="text">Only UCSB Robotics official members can access our library of technical videos from the mechanical, electrical, and software teams. See an officer if you haven't paid yet or if you've forgotten the password! </p>
            <form className="text" autoComplete="off" onSubmit={submit}>
                <label>Please enter the password: &nbsp;</label>
                <input type="text" name="title" onChange={e => setuserInputpassword(e.target.value)}/> &nbsp;
                <input type="submit"/>
            </form>
        </div>
        
    )
}

export default PasswordForm