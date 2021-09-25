import { React, useEffect, useState } from 'react'

/* Props:
title = title of the collapsible
id = unique css id, only used for finding the collapsible in the collapsible function and has no effect on the styling
textPath = the path of the text description of the project/competition relative to the public folder. This is a text file inside of the public/projects or public/competitions directory
    Example of valid text path prop: "/competitions/navcar.txt"
isCompetition = whether it is a competition. This solely affects <h4> </h4>. If it is a competition, it will show up as: <h4>What is {props.title}?</h4>
    else, it will show: <h4>{props.title}</h4>
*/

const Collapsible = (props) => {

    const [paragraphs, setParagraphs] = useState([])

    
    useEffect(() => {
        // Import text file and split into array divided by paragraph
        const getParagraphs = () => {
        // eslint-disable-next-line
        fetch(props.textPath)
            .then(r => r.text())
            .then(text => {
                setParagraphs(text.split("\n"))
            })

        }
        getParagraphs();
    // eslint-disable-next-line
    },[])

    // Define function to enable collapsing of collapsible on click
    function collapsible(id) {
		let collapsible = document.getElementById(id);
		collapsible.classList.toggle("collapsible-active");
		collapsible.classList.toggle("arrow-active");
		let content = collapsible.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		} 
	}

    function checkIfphoto(text) {
        // The photo refereced in the txt file is a path that's uploaded in the public folder
        // Add more file extensions if needed
        let validImageExtension = ['.jpg', '.png', '.jpeg', '.svg', '.webp']
        for (let i = 0; i < validImageExtension.length; i++) {
            if (text.includes(validImageExtension[i])) {
                return true;
            }
        }
        // Case 2: the photo is from the internet (not recommended since images can disappear)
        if (text.includes("http")) { 
            console.log("not supported yet");
            return false;
        }
        return false;
    }

    function checkIfGithub(text) {
        if (text.includes("github.com/")) {
            return true;
        } else {
            return false
        }
    }

    return(
        <div>
            <button type="button" className="collapsible" id={props.id} onClick={() => {collapsible(`${props.id}`)}}>{props.title}</button>
            <div className="collapsible-content">
                <h4 className="collapsible-title"> {props.isCompetition ? "What is " + props.title + "?" : props.title} </h4>
                {paragraphs.map((paragraph) => {
                    //console.log(paragraph);
                    if (checkIfphoto(paragraph)) {
                        //console.log("Hi there");
                        return <img src={process.env.PUBLIC_URL + paragraph} alt={paragraph}/>
                    } else if (checkIfGithub(paragraph)) {
                        return <p className="text"><a className="collapsible-link" href={paragraph} target="_blank" rel="noreferrer">{paragraph}</a></p>
                    } else {
                        return <p className="text">{paragraph}</p>
                    }
                    
                }
                )}
                <br/><br/>
            </div>
        </div>
    )
}

export default Collapsible