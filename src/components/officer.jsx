import React from 'react'

/* Use the officer json to add/remove officers */

/* Props:
image = link to officer image, as specified in the officer json
name = name of the officer
position = position of the officer
description = description of the officer
*/

/* When adding an officer image, put it into public/officer-images and add the file name into the officer-descriptions.json */

const Officer = (props) => {

    return (
        <div className="officer-section">
            <div className="officer-image-container">
                {/* <img className="officer-image" src={require(`${props.image}`).default} alt={props.name}/> */}
                <img className="officer-image" src={process.env.PUBLIC_URL + "/officer-images/" + props.image} alt={props.name}/>
                <div className="overlay">
                    <div className="officer-overlay-name">{props.name}</div>
                </div>
            </div>
            <div className="officer-description">
                <h4 className="officer-name">{props.name} — {props.position}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Officer