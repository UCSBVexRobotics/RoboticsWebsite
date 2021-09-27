import {React, useEffect, useState} from 'react'

const Announcements = () => {

    function convertLinks(input) {

        // Alternate approach: https://stackoverflow.com/questions/52803058/detect-links-in-messages-in-discord-js
        // Code adapted/yoinked from https://stackoverflow.com/questions/49634850/javascript-convert-plain-text-links-to-clickable-links

        let text = input;
        const linksFound = text.match( /(?:www|https?)[^\s]+/g );
        const aLink = [];

        if ( linksFound != null ) {
            for (let i=0; i<linksFound.length; i++ ) {
                let replace = linksFound[i];
                if ( !( linksFound[i].match( /(http(s?)):\/\// ) ) ) {
                    replace = 'http://' + linksFound[i]
                }
                let linkText = replace.split( '/' )[2];
                if ( linkText.substring( 0, 3 ) === 'www' ) {
                    linkText = linkText.replace( 'www.', '' )
                }
                if ( linkText.match( /youtu/ ) ) {

                    let youtubeID = replace.split( '/' ).slice(-1)[0];
                    aLink.push( '<div class="video-wrapper"><iframe src="https://www.youtube.com/embed/' + youtubeID + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>' )
                }
                else if ( linkText.match( /vimeo/ ) ) {
                    let vimeoID = replace.split( '/' ).slice(-1)[0];
                    aLink.push( '<div class="video-wrapper"><iframe src="https://player.vimeo.com/video/' + vimeoID + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>' )
                }
                else {
                    aLink.push( '<a href="' + replace + '" target="_blank">' + linkText + '</a>' );
                }
                text = text.split( linksFound[i] ).map(item => { return aLink[i].includes('iframe') ? item.trim() : item } ).join( aLink[i] );
                }
            return text;
        }
        else {
            return input;
        }
    }

    let messages = [
        {
            user: "Rory (President",
            date: "9/25/21 at 11:33 AM",
            content: `Hey everyone, here's the link to today's slide deck! Thanks to everyone who attended! \n https://docs.google.com/presentation/d/1bwOp04zN0ua0Hal4pRs8W6yRMGY8c3TeSGbw0nzSfVQ/edit?usp=sharing`
        }, {
            user: "Aditya (Co-Electrical Lead)",
            date: "9/25/21 at 10:58 AM",
            content: `@everyone Google form link: https://docs.google.com/forms/d/e/1FAIpQLSfLaxliGYdsvditzXtbPU9aYcSNRximBsAyamW8c8PA5zuyNA/viewform?usp=sf_link`
        },{
            user: "Rory (President)",
            date: "9/25/21 at 9:17 AM",
            content: `Hey @everyone, friendly reminder that our first meeting is at 10am today at the ESB room 1001 (map location above). For those who cannot attend in person, feel free to join us at this zoom link \n https://ucsb.zoom.us/j/9442086383 \n That will open around 10am. Thanks!`
        }, {
            user: "Rory (President)",
            date: "9/25/21 at 1:33 PM",
            content: `Hey @everyone due to a large amount of interest in tomorrow’s meeting we will not be able to have the meeting in the EUCR as it would not follow COVID and fire safety guidelines. As such we will instead have our meeting tomorrow in the Engineering Sciences building in room 1001 (located here https://www.google.com/maps/place/Engineering+Science+Building,+451+Mesa+Rd,+Isla+Vista,+CA+93117/@34.4155995,-119.8412887,16z/data=!4m2!3m1!1s0x80e93f712bdfdcb7:0xd67a967fff7a50c8?hl=en-us). The meeting will still be at 10am. \n I hope to see everyone there! If there’s any questions please message me or in the general channel. Thanks!`
        }
        ]

        messages.reverse();

    return (
        <div className="announcements">
            <div className="announcements-title noselect">
                UCSB Robotics Club Discord Announcements
            </div>
            {messages.map((message) => {
                
                let messageContentarr = message.content.split("\n");
                // messageContentarr.forEach(paragraph => console.log(convertLinks(paragraph)))

                return (
                    <div className="announcements-message-box" key={message.content}>
                        <div className="announcements-message-sender">
                            {message.user} <span className="announcements-message-date"> {message.date} </span>
                        </div>
                        <div className="announcements-message-content">
                            {messageContentarr.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                )
            })}
            <div className="annnouncements-footer">
                <a href="https://discord.gg/FwEhufxEuY" target="_blank" rel="noopener noreferrer">Join our Discord! </a>
            </div>
        </div>
    )
}

/* TODO:
- Actually connect to DB using useEffect
- Implement user photos from Discord
- Convert links into <href> somehow
- Make this thing mobile compatible
*/

export default Announcements