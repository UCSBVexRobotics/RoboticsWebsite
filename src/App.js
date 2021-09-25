import { useEffect, useState } from 'react';
import './App.css';

import Header from "./components/header"
import Navbar from "./components/navbar"
import Collapsible from './components/collapsible';
import Officer from "./components/officer"
import Outreach from "./components/outreach"
import About from "./components/about"
import Videos from "./components/videos"

import { checkOfficers } from "./error-checks/testOfficers.js"

function App() {

	const [officers, setOfficers] = useState([]);

	// Import officer information from the json, see readme
	const getOfficerdescriptions = () => {
		fetch('officers.json'
		,{
			headers : { 
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		}
		)
			.then((response) => {
				return response.json();
			})
			.then((officerJson) => {
				checkOfficers(officerJson.officers)
				setOfficers(officerJson.officers);
			})
	}
	useEffect(() => {
		getOfficerdescriptions()
	},[])

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

	return (
		<div>
			<Header/>
			<Navbar/>
			<About/>

			<div className="competitions">
				<h3 id="competitions">PROJECTS & COMPETITIONS</h3>
				<Collapsible title="LagoonBot" id="lagoonbot" textPath="/competitions/lagoonbot/lagoonbot.txt" isCompetition={false}/>
				<Collapsible title="BattleBots" id="battlebots" textPath="/competitions/battlebots/battlebots.txt" isCompetition={true}/>
				<Collapsible title="Natcar" id="natcar" textPath="/competitions/natcar/natcar.txt" isCompetition={true}/>
				<Collapsible title="Micromouse" id="micromouse" textPath="/competitions/micromouse/micromouse.txt" isCompetition={true}/>
			</div>

			{/* <div className="projects">
				<h3 id="projects">PROJECTS</h3>
				<button type="button" className="collapsible" id="mechanical" onClick={() => {collapsible('mechanical')}}>Mechanical</button>
				<div className="collapsible-content">
					<h4 className="text">Project Title Here</h4>
					<img src="https://static.generation-robots.com/8908-large_default/scout-robotics-chassis.jpg" alt="mechanical"/>
					<p className="text">
						Project Description Here
					</p>
					<br/><br/>
				</div>
				<button type="button" className="collapsible" id="electrical" onClick={() => {collapsible('electrical')}}>Electrical</button>
				<div className="collapsible-content">
					<h4 className="text">Project Title Here</h4>
					<img src="http://cdn.shopify.com/s/files/1/0243/7593/products/MSUMP1-0001-0.jpg" alt="electrical"/>
					<p className="text">
						Project Description Here
					</p>
					<br/><br/>
				</div>
				<button type="button" className="collapsible" id="software" onClick={() => {collapsible('software')}}>Software</button>
				<div className="collapsible-content">
					<h4 className="text">Project Title Here</h4>
					<img src="https://timodenk.com/blog/wp-content/uploads/2017/03/IMG_20170615_121732382-825x414.jpg" alt="software"/>
					<p className="text">
						Project Description Here
					</p>
					<br/><br/>
				</div>
			</div> */}

			<div className="officers">
				<h3 id="officers">OFFICERS</h3>
				{/* Map every officer from the json file inside of public folder */}
				{officers.map((officer) => (
					<Officer name={officer.name} position={officer.position} image={officer.image} description={officer.description}/>
				)
				)}
			</div>

			<Outreach/>
			
			{/* The password state is inside of the passwordform component inside of the video component */}
			<Videos/>

			{/* <div className="photos">
				<h3 id="photos">PHOTOS</h3>
			</div> */}

			<h3 id="contact">SOCIAL MEDIA & CONTACT</h3>
			<div className="social-media-container">
				<a className="social-media-link" href="https://www.instagram.com/gauchobotics/?hl=en" target="_blank" rel="noopener noreferrer">
					<svg className="instagram" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 122.88">
						<path d="M61.45,0C44.76,0,42.66.07,36.11.37A45.08,45.08,0,0,0,21.2,3.23a29.86,29.86,0,0,0-10.88,7.08,30.26,30.26,0,0,0-7.1,10.88A44.92,44.92,0,0,0,.37,36.11C.08,42.66,0,44.75,0,61.44S.07,80.21.37,86.77a45.08,45.08,0,0,0,2.86,14.91,30.12,30.12,0,0,0,7.08,10.88,30.13,30.13,0,0,0,10.88,7.1,45.17,45.17,0,0,0,14.92,2.85c6.55.3,8.64.37,25.33.37s18.77-.07,25.33-.37a45.17,45.17,0,0,0,14.92-2.85,31.54,31.54,0,0,0,18-18,45.6,45.6,0,0,0,2.86-14.91c.29-6.55.37-8.64.37-25.33s-.08-18.78-.37-25.33a45.66,45.66,0,0,0-2.86-14.92,30.1,30.1,0,0,0-7.09-10.88,29.77,29.77,0,0,0-10.88-7.08A45.14,45.14,0,0,0,86.76.37C80.2.07,78.12,0,61.43,0ZM55.93,11.07h5.52c16.4,0,18.34.06,24.82.36a34,34,0,0,1,11.41,2.11,19,19,0,0,1,7.06,4.6,19.16,19.16,0,0,1,4.6,7.06,34,34,0,0,1,2.11,11.41c.3,6.47.36,8.42.36,24.82s-.06,18.34-.36,24.82a33.89,33.89,0,0,1-2.11,11.4A20.35,20.35,0,0,1,97.68,109.3a33.64,33.64,0,0,1-11.41,2.12c-6.47.3-8.42.36-24.82.36s-18.35-.06-24.83-.36a34,34,0,0,1-11.41-2.12,19,19,0,0,1-7.07-4.59,19,19,0,0,1-4.59-7.06,34,34,0,0,1-2.12-11.41c-.29-6.48-.35-8.42-.35-24.83s.06-18.34.35-24.82a33.7,33.7,0,0,1,2.12-11.41,19,19,0,0,1,4.59-7.06,19.12,19.12,0,0,1,7.07-4.6A34.22,34.22,0,0,1,36.62,11.4c5.67-.25,7.86-.33,19.31-.34Zm38.31,10.2a7.38,7.38,0,1,0,7.38,7.37,7.37,7.37,0,0,0-7.38-7.37ZM61.45,29.89A31.55,31.55,0,1,0,93,61.44,31.56,31.56,0,0,0,61.45,29.89Zm0,11.07A20.48,20.48,0,1,1,41,61.44,20.48,20.48,0,0,1,61.45,41Z"/>
					</svg>
				</a>
				<a id="instagram-text" className="social-text" href="https://www.instagram.com/gauchobotics/?hl=en" target="_blank" rel="noopener noreferrer">
					@gauchobotics
				</a>
			</div>
			<div className="social-media-container">
				<a className="social-media-link" href="https://discord.gg/FwEhufxEuY" target="_blank" rel="noopener noreferrer">
					{/* <svg className="discord" xmlns="http://www.w3.org/2000/svg" width="75" viewBox="0 0 71 55" fill="none">
						<g clip-path="url(#clip0)">
							<path className="discord" d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="#ffffff"/>
						</g>
						<defs>
							<clipPath id="clip0">
								<rect width="71" height="55" fill="white"/>
							</clipPath>
						</defs>
					</svg> */}
					<svg xmlns="http://www.w3.org/2000/svg" className="discord" width="75" viewBox="0 0 71 55" fill="none"><g clipPath="url(#clip0)"><path className="discord" d="M60.1 4.9C55.6 2.8 50.7 1.3 45.7 0.4 45.6 0.4 45.5 0.4 45.4 0.5 44.8 1.6 44.1 3.1 43.6 4.2 38.2 3.4 32.7 3.4 27.4 4.2 26.9 3.1 26.2 1.6 25.6 0.5 25.5 0.4 25.4 0.4 25.3 0.4 20.3 1.3 15.4 2.8 10.9 4.9 10.8 4.9 10.8 4.9 10.8 5 1.6 18.7-0.9 32.1 0.3 45.4 0.3 45.5 0.3 45.5 0.4 45.6 6.5 50 12.3 52.7 18.1 54.5 18.2 54.5 18.3 54.5 18.4 54.4 19.7 52.6 20.9 50.6 22 48.5 22.1 48.4 22 48.3 21.9 48.2 19.9 47.5 18.1 46.6 16.3 45.6 16.2 45.5 16.2 45.3 16.3 45.2 16.7 44.9 17.1 44.6 17.4 44.3 17.5 44.3 17.6 44.3 17.6 44.3 29.3 49.6 41.8 49.6 53.3 44.3 53.4 44.3 53.5 44.3 53.6 44.3 53.9 44.6 54.3 44.9 54.7 45.2 54.8 45.3 54.8 45.5 54.6 45.6 52.9 46.6 51 47.5 49.1 48.2 49 48.3 48.9 48.4 49 48.5 50 50.6 51.3 52.6 52.6 54.4 52.7 54.5 52.8 54.5 52.8 54.5 58.6 52.7 64.5 50 70.6 45.6 70.7 45.5 70.7 45.5 70.7 45.4 72.2 30.1 68.2 16.8 60.2 5 60.2 4.9 60.1 4.9 60.1 4.9ZM23.7 37.3C20.2 37.3 17.3 34.1 17.3 30.2 17.3 26.2 20.2 23 23.7 23 27.3 23 30.2 26.3 30.1 30.2 30.1 34.1 27.3 37.3 23.7 37.3ZM47.3 37.3C43.8 37.3 40.9 34.1 40.9 30.2 40.9 26.2 43.8 23 47.3 23 50.9 23 53.8 26.3 53.7 30.2 53.7 34.1 50.9 37.3 47.3 37.3Z" fill="#fff"/></g><defs><clipPath><rect width="71" height="55" fill="white"/></clipPath></defs></svg>
				</a>
				<a id="discord-text" className="social-text" href="https://discord.gg/FwEhufxEuY" target="_blank" rel="noopener noreferrer">
					Discord
				</a>
			</div>
			<div className="social-media-container">
				<a className="social-media-link" href="https://www.facebook.com/ucsbroboticsclub/" target="_blank" rel="noopener noreferrer">
					<svg className="facebook" xmlns="http://www.w3.org/2000/svg" width="64" height="64" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640">
						<path d="M579.999-.012H60C27-.012-.013 27-.013 60.001V580C-.013 613 27 640.012 60 640.012h519.999c33 0 60.013-27.012 60.013-60.012V60c0-33-27.013-60.012-60.013-60.012zM363.819 173.79h73.147V86.068h-73.147c-56.328 0-102.285 45.945-102.285 102.344v43.843h-58.489V320h58.477v233.932h87.734V320h73.075l14.634-87.745h-87.71v-43.843c0-7.938 6.698-14.634 14.564-14.634v.011z"/>
					</svg>
				</a>
				<a id="facebook-text" className="social-text" href="https://www.facebook.com/ucsbroboticsclub/" target="_blank" rel="noopener noreferrer">
					UCSB Robotics Club
				</a>
			</div>
			<div className="social-media-container">
				<a className="social-media-link" href="mailto:roboticsclubucsb@gmail.com" target="_blank" rel="noopener noreferrer">
					{/* <svg className="email" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="122.88px" height="78.607px" viewBox="0 0 122.88 78.607" enable-background="new 0 0 122.88 78.607" xml:space="preserve">
						<g>
							<path className="email" fill-rule="evenodd" clipRule="evenodd" d="M61.058,65.992l24.224-24.221l36.837,36.836H73.673h-25.23H0l36.836-36.836 L61.058,65.992L61.058,65.992z M1.401,0l59.656,59.654L120.714,0H1.401L1.401,0z M0,69.673l31.625-31.628L0,6.42V69.673L0,69.673z M122.88,72.698L88.227,38.045L122.88,3.393V72.698L122.88,72.698z"/>
						</g>
					</svg> */}
					<svg xmlns="http://www.w3.org/2000/svg" className="email" width="123" height="79" viewBox="0 0 122.9 78.6"><path className="email" d="M61.1 66l24.2-24.2 36.8 36.8H73.7h-25.2H0l36.8-36.8L61.1 66 61.1 66zM1.4 0l59.7 59.7L120.7 0H1.4L1.4 0zM0 69.7l31.6-31.6L0 6.4V69.7L0 69.7zM122.9 72.7L88.2 38 122.9 3.4V72.7L122.9 72.7z"/></svg>
				</a>
				<a id="email-text" className="social-text" href="mailto:roboticsclubucsb@gmail.com" target="_blank" rel="noopener noreferrer">
					roboticsclubucsb@gmail.com
				</a>
			</div>
			
			<img className="social-image" src={process.env.PUBLIC_URL + 'social-small.jpg'} alt="UCSB Robotics Social"/>
		</div>
	);
}

export default App;

/*
TODO:
- Embed images side by side like with a flexbox or something like that?
	- Idea: concatenate a filler substring or something, then split by that. Put into array, change formatting? kinda hard
- Install FontAwesome for icons?
- Rename header and social images
- What if the text has a .jpg word or something in it?
	- Figure out better if the line is a path or not or something
- Failed password alert needs to be better, or something actually rendered on the website!
- Mobile friendly CSS (huge task)
	- For small screens, turn the navbar into a grid?
	- Fix navbars for slightly larger devices?
- Finish videocontainer
- Social icons hover and color change don't match up, and Discord and envelope have a non color spot in the middle when hovering
- Officer images link to linkedIns or websites whatever
- Error checking for collapsible (typescript?)
- Replace br between sections with a bottom margin instead
- Navbar component: replace <a> with button
- Unique key, see comment by @Chris here: https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js


Mobile website issues
- On iPhone 8:
	- Scroll into view is not working well, it's a bit off and isn't a clean animation
		- Safari and Chrome
		- Issue with iPhone 12 too
	- Nav bar is a bit too big
- on Firefox focus/Galaxy S10
	- When you go to technical videos and below, you can't scroll back up
	- Scrolling to officers, and then back up works. So it's not an issue with general "scrolling up"
	- Works on chrome
- General:
	- Safari does not have "smooth scrolling" using scrollIntoview

- For smaller devices, consider switching to a grid style nav bar? Or smarter flexbox?
*/