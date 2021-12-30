(this.webpackJsonpucsbrobotics=this.webpackJsonpucsbrobotics||[]).push([[0],{20:function(e,t,i){},22:function(e,t,i){},27:function(e,t,i){"use strict";i.r(t);var c=i(1),s=i.n(c),n=i(9),a=i.n(n),o=(i(20),i(7)),r=i.n(o),l=i(10),j=i(2),d=(i(22),i(0)),b=function(){return Object(d.jsxs)("div",{className:"header",id:"header",children:[Object(d.jsx)("img",{id:"header-image",className:"header-image",src:"/RoboticsWebsite/header-smallbig.jpg",alt:"UCSB Robotics Website"}),Object(d.jsx)("div",{className:"header-text-container",children:Object(d.jsxs)("div",{className:"header-title",children:[Object(d.jsx)("img",{className:"logo noselect",src:"/RoboticsWebsite/robotics_logo.png",alt:"UCSB Robotics"}),Object(d.jsx)("span",{className:"website-title noselect",children:"\xa0UCSB Robotics Club"})]})})]})},h=function(){var e=Object(c.useState)("inactive"),t=Object(j.a)(e,2),i=t[0],s=t[1];function n(e){"is-responsive"===i&&s("inactive"),document.getElementById(e).scrollIntoView({behavior:"smooth"})}return Object(d.jsxs)("nav",{className:"navbar ".concat(i),id:"navbar",children:[Object(d.jsx)("a",{className:"nav-link",onClick:function(){return n("header")},children:Object(d.jsx)("img",{className:"logo-nav",src:"/RoboticsWebsite/robotics_logo.png",alt:"UCSB Robotics"})}),Object(d.jsx)("a",{className:"nav-link",onClick:function(){return n("about")},children:Object(d.jsx)("span",{children:"About"})}),Object(d.jsx)("a",{className:"nav-link",onClick:function(){return n("competitions")},children:Object(d.jsx)("span",{children:"Competitions"})}),Object(d.jsx)("a",{className:"nav-link",onClick:function(){return n("officers")},children:Object(d.jsx)("span",{children:"Officers"})}),Object(d.jsx)("a",{className:"nav-link",onClick:function(){return n("outreach")},children:Object(d.jsx)("span",{children:"Outreach"})}),Object(d.jsx)("a",{className:"nav-link",onClick:function(){return n("videos")},children:Object(d.jsx)("span",{children:"Technical Videos"})}),Object(d.jsx)("a",{className:"nav-link",onClick:function(){return n("photos")},children:Object(d.jsx)("span",{children:"Photos"})}),Object(d.jsx)("a",{className:"nav-link",onClick:function(){return n("contact")},children:Object(d.jsx)("span",{children:"Contact"})}),Object(d.jsxs)("div",{className:"hamburger ".concat(i),id:"hamburger",onClick:function(){return console.log("Burger clicked"),void s("inactive"===i?"is-responsive":"inactive")},children:[Object(d.jsx)("span",{className:"line"}),Object(d.jsx)("span",{className:"line"}),Object(d.jsx)("span",{className:"line"})]})]})},m=function(e){var t=Object(c.useState)([]),i=Object(j.a)(t,2),s=i[0],n=i[1];return Object(c.useEffect)((function(){fetch("/RoboticsWebsite/"+e.textPath).then((function(e){return e.text()})).then((function(e){n(e.split("\n"))}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{type:"button",className:"collapsible",id:e.id,onClick:function(){!function(e){var t=document.getElementById(e);t.classList.toggle("collapsible-active"),t.classList.toggle("arrow-active");var i=t.nextElementSibling;i.style.maxHeight?i.style.maxHeight=null:i.style.maxHeight=i.scrollHeight+"px"}("".concat(e.id))},children:e.title}),Object(d.jsxs)("div",{className:"collapsible-content",children:[Object(d.jsxs)("h4",{className:"collapsible-title",children:[" ",e.isCompetition?"What is "+e.title+"?":e.title," "]}),s.map((function(e){return function(e){for(var t=[".jpg",".png",".jpeg",".svg",".webp"],i=0;i<t.length;i++)if(e.includes(t[i]))return!0;return!!e.includes("http")&&(console.log("not supported yet"),!1)}(e)?Object(d.jsx)("img",{src:"/RoboticsWebsite/"+e,alt:e},e+Math.random(1e3).toString()):e.includes("github.com/")?Object(d.jsx)("p",{className:"text",children:Object(d.jsx)("a",{className:"collapsible-link",href:e,target:"_blank",rel:"noreferrer",children:e})},e+Math.random(1e3).toString()):Object(d.jsx)("p",{className:"text",children:e},e+Math.random(1e3).toString())})),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})]})},u=function(e){return Object(d.jsxs)("div",{className:"officer-section",children:[Object(d.jsxs)("div",{className:"officer-image-container",children:[Object(d.jsx)("img",{className:"officer-image",src:"/RoboticsWebsite/officer-images/"+e.image,alt:e.name}),Object(d.jsx)("div",{className:"overlay",children:Object(d.jsx)("div",{className:"officer-overlay-name",children:e.name})})]}),Object(d.jsxs)("div",{className:"officer-description",children:[Object(d.jsxs)("h4",{className:"officer-name",children:[e.name," \u2014 ",e.position]}),Object(d.jsx)("p",{children:e.description})]})]})},f=function(){return Object(d.jsxs)("div",{className:"outreach",children:[Object(d.jsx)("h3",{id:"outreach",children:"EDUCATIONAL OUTREACH"}),Object(d.jsx)("p",{className:"text",children:"The Educational Outreach Division is dedicated to encourage and empower future generations to be inquisitive and inventive, to approach any problem with a curious and understanding mind, and to pursue knowledge with an ambitious spirit. At the same time, our division\u2019s devoted team of volunteers work tirelessly to promote an inclusive, inspiring environment for children across our local community. We hope to also serve as leading examples of academic excellence and scholastic rigor, with the aim to motivate these same qualities in the students we impact."}),Object(d.jsx)("p",{className:"text",children:"We are currently reaching out to elementary schools in our local community to figure out how we may collaborate in the near future to establish after-school programs for local students. We are mainly in the planning stages, creating the infrastructure and building the connections necessary to achieve our goals."})]})},x=function(){return Object(d.jsxs)("div",{className:"about",children:[Object(d.jsx)("h3",{id:"about",children:"ABOUT US"}),Object(d.jsx)("p",{className:"text",children:"The Robotics Club at UCSB is a project-oriented club composed of students interested in the many fields related to robotics. We participate in competitions throughout the year, as well as do volunteer work, hold educational outreach programs, and work on other member-initiated projects. Students of all majors and skill levels with an interest in learning more about robotics are strongly encouraged to join and participate in the activities held throughout the year!"})]})},O=i(11);i.n(O).a.config();var p=function(e){var t=Object(c.useState)(""),i=Object(j.a)(t,2),s=i[0],n=i[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"text",children:"Only UCSB Robotics official members can access our library of technical videos from the mechanical, electrical, and software teams. See an officer if you haven't paid yet or if you've forgotten the password! "}),Object(d.jsxs)("form",{className:"text",autoComplete:"off",onSubmit:function(t){t.preventDefault(),"neemers970"===s?e.setPasswordstatus(!0):alert("Incorrect password!")},children:[Object(d.jsx)("label",{children:"Please enter the password: \xa0"}),Object(d.jsx)("input",{type:"text",name:"title",onChange:function(e){return n(e.target.value)}})," \xa0",Object(d.jsx)("input",{type:"submit"})]})]})},g=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:"text",children:"Videos will be coming soon!"})})},v=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),i=t[0],s=t[1];return Object(c.useEffect)((function(){}),[]),Object(d.jsxs)("div",{className:"videos",children:[Object(d.jsx)("h3",{id:"videos",children:"TECHNICAL VIDEOS"}),i?Object(d.jsx)(g,{}):Object(d.jsx)(p,{setPasswordstatus:function(e){return s(e)}})]})},N=i(12),w=i(13),C=i(14),k=i(15),S=function(e){Object(w.a)(i,e);var t=Object(C.a)(i);function i(e){var c;return Object(N.a)(this,i),(c=t.call(this,e)).name="ValidationError",c}return i}(Object(k.a)(Error));function y(e){for(var t=1;t<e.length;t++){if(!e[t].name)throw new S("Missing officer name in JSON for officer #"+t.toString());if(!e[t].position)throw new S("Missing officer position in JSON for officer #"+t.toString());if(!e[t].image)throw new S("Missing officer image file name in JSON for officer #"+t.toString());if(!e[t].description)throw new S("Missing officer description in JSON for officer #"+t.toString())}}var R=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),i=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("/RoboticsWebsite/officers.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(){var e=Object(l.a)(r.a.mark((function e(t){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,t.json();case 3:i=e.sent,console.log(i),i&&(y(i.officers),s(i.officers));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{}),Object(d.jsx)(h,{}),Object(d.jsx)(x,{}),Object(d.jsxs)("div",{className:"competitions",children:[Object(d.jsx)("h3",{id:"competitions",children:"CURRENT PROJECTS & COMPETITIONS"}),Object(d.jsx)(m,{title:"LagoonBot",id:"lagoonbot",textPath:"/competitions/lagoonbot/lagoonbot.txt",isCompetition:!1}),Object(d.jsx)(m,{title:"BattleBots",id:"battlebots",textPath:"/competitions/battlebots/battlebots.txt",isCompetition:!0}),Object(d.jsx)("h3",{id:"competitions",children:"PAST COMPETITIONS"}),Object(d.jsx)(m,{title:"Natcar",id:"natcar",textPath:"/competitions/natcar/natcar.txt",isCompetition:!0}),Object(d.jsx)(m,{title:"Micromouse",id:"micromouse",textPath:"/competitions/micromouse/micromouse.txt",isCompetition:!0})]}),Object(d.jsxs)("div",{className:"officers",children:[Object(d.jsx)("h3",{id:"officers",children:"OFFICERS"}),i.map((function(e){return Object(d.jsx)(u,{name:e.name,position:e.position,image:e.image,description:e.description},e.name)}))]}),Object(d.jsx)(f,{}),Object(d.jsx)(v,{}),Object(d.jsxs)("div",{className:"photos",children:[Object(d.jsx)("h3",{id:"photos",children:"PHOTOS"}),Object(d.jsx)("p",{className:"text",children:"Coming Soon...!"})]}),Object(d.jsx)("h3",{id:"contact",children:"SOCIAL MEDIA & CONTACT"}),Object(d.jsxs)("div",{className:"social-media-container",children:[Object(d.jsx)("a",{className:"social-media-link",href:"https://www.instagram.com/gauchobotics/?hl=en",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("svg",{className:"instagram",xmlns:"http://www.w3.org/2000/svg",id:"Layer_1","data-name":"Layer 1",viewBox:"0 0 122.88 122.88",children:Object(d.jsx)("path",{d:"M61.45,0C44.76,0,42.66.07,36.11.37A45.08,45.08,0,0,0,21.2,3.23a29.86,29.86,0,0,0-10.88,7.08,30.26,30.26,0,0,0-7.1,10.88A44.92,44.92,0,0,0,.37,36.11C.08,42.66,0,44.75,0,61.44S.07,80.21.37,86.77a45.08,45.08,0,0,0,2.86,14.91,30.12,30.12,0,0,0,7.08,10.88,30.13,30.13,0,0,0,10.88,7.1,45.17,45.17,0,0,0,14.92,2.85c6.55.3,8.64.37,25.33.37s18.77-.07,25.33-.37a45.17,45.17,0,0,0,14.92-2.85,31.54,31.54,0,0,0,18-18,45.6,45.6,0,0,0,2.86-14.91c.29-6.55.37-8.64.37-25.33s-.08-18.78-.37-25.33a45.66,45.66,0,0,0-2.86-14.92,30.1,30.1,0,0,0-7.09-10.88,29.77,29.77,0,0,0-10.88-7.08A45.14,45.14,0,0,0,86.76.37C80.2.07,78.12,0,61.43,0ZM55.93,11.07h5.52c16.4,0,18.34.06,24.82.36a34,34,0,0,1,11.41,2.11,19,19,0,0,1,7.06,4.6,19.16,19.16,0,0,1,4.6,7.06,34,34,0,0,1,2.11,11.41c.3,6.47.36,8.42.36,24.82s-.06,18.34-.36,24.82a33.89,33.89,0,0,1-2.11,11.4A20.35,20.35,0,0,1,97.68,109.3a33.64,33.64,0,0,1-11.41,2.12c-6.47.3-8.42.36-24.82.36s-18.35-.06-24.83-.36a34,34,0,0,1-11.41-2.12,19,19,0,0,1-7.07-4.59,19,19,0,0,1-4.59-7.06,34,34,0,0,1-2.12-11.41c-.29-6.48-.35-8.42-.35-24.83s.06-18.34.35-24.82a33.7,33.7,0,0,1,2.12-11.41,19,19,0,0,1,4.59-7.06,19.12,19.12,0,0,1,7.07-4.6A34.22,34.22,0,0,1,36.62,11.4c5.67-.25,7.86-.33,19.31-.34Zm38.31,10.2a7.38,7.38,0,1,0,7.38,7.37,7.37,7.37,0,0,0-7.38-7.37ZM61.45,29.89A31.55,31.55,0,1,0,93,61.44,31.56,31.56,0,0,0,61.45,29.89Zm0,11.07A20.48,20.48,0,1,1,41,61.44,20.48,20.48,0,0,1,61.45,41Z"})})}),Object(d.jsx)("a",{id:"instagram-text",className:"social-text",href:"https://www.instagram.com/gauchobotics/?hl=en",target:"_blank",rel:"noopener noreferrer",children:"@gauchobotics"})]}),Object(d.jsxs)("div",{className:"social-media-container",children:[Object(d.jsx)("a",{className:"social-media-link",href:"https://discord.gg/FwEhufxEuY",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"discord",width:"75",viewBox:"0 0 71 55",fill:"none",children:[Object(d.jsx)("g",{clipPath:"url(#clip0)",children:Object(d.jsx)("path",{className:"discord",d:"M60.1 4.9C55.6 2.8 50.7 1.3 45.7 0.4 45.6 0.4 45.5 0.4 45.4 0.5 44.8 1.6 44.1 3.1 43.6 4.2 38.2 3.4 32.7 3.4 27.4 4.2 26.9 3.1 26.2 1.6 25.6 0.5 25.5 0.4 25.4 0.4 25.3 0.4 20.3 1.3 15.4 2.8 10.9 4.9 10.8 4.9 10.8 4.9 10.8 5 1.6 18.7-0.9 32.1 0.3 45.4 0.3 45.5 0.3 45.5 0.4 45.6 6.5 50 12.3 52.7 18.1 54.5 18.2 54.5 18.3 54.5 18.4 54.4 19.7 52.6 20.9 50.6 22 48.5 22.1 48.4 22 48.3 21.9 48.2 19.9 47.5 18.1 46.6 16.3 45.6 16.2 45.5 16.2 45.3 16.3 45.2 16.7 44.9 17.1 44.6 17.4 44.3 17.5 44.3 17.6 44.3 17.6 44.3 29.3 49.6 41.8 49.6 53.3 44.3 53.4 44.3 53.5 44.3 53.6 44.3 53.9 44.6 54.3 44.9 54.7 45.2 54.8 45.3 54.8 45.5 54.6 45.6 52.9 46.6 51 47.5 49.1 48.2 49 48.3 48.9 48.4 49 48.5 50 50.6 51.3 52.6 52.6 54.4 52.7 54.5 52.8 54.5 52.8 54.5 58.6 52.7 64.5 50 70.6 45.6 70.7 45.5 70.7 45.5 70.7 45.4 72.2 30.1 68.2 16.8 60.2 5 60.2 4.9 60.1 4.9 60.1 4.9ZM23.7 37.3C20.2 37.3 17.3 34.1 17.3 30.2 17.3 26.2 20.2 23 23.7 23 27.3 23 30.2 26.3 30.1 30.2 30.1 34.1 27.3 37.3 23.7 37.3ZM47.3 37.3C43.8 37.3 40.9 34.1 40.9 30.2 40.9 26.2 43.8 23 47.3 23 50.9 23 53.8 26.3 53.7 30.2 53.7 34.1 50.9 37.3 47.3 37.3Z",fill:"#fff"})}),Object(d.jsx)("defs",{children:Object(d.jsx)("clipPath",{children:Object(d.jsx)("rect",{width:"71",height:"55",fill:"white"})})})]})}),Object(d.jsx)("a",{id:"discord-text",className:"social-text",href:"https://discord.gg/FwEhufxEuY",target:"_blank",rel:"noopener noreferrer",children:"Discord"})]}),Object(d.jsxs)("div",{className:"social-media-container",children:[Object(d.jsx)("a",{className:"social-media-link",href:"https://www.facebook.com/ucsbroboticsclub/",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("svg",{className:"facebook",xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd",viewBox:"0 0 640 640",children:Object(d.jsx)("path",{d:"M579.999-.012H60C27-.012-.013 27-.013 60.001V580C-.013 613 27 640.012 60 640.012h519.999c33 0 60.013-27.012 60.013-60.012V60c0-33-27.013-60.012-60.013-60.012zM363.819 173.79h73.147V86.068h-73.147c-56.328 0-102.285 45.945-102.285 102.344v43.843h-58.489V320h58.477v233.932h87.734V320h73.075l14.634-87.745h-87.71v-43.843c0-7.938 6.698-14.634 14.564-14.634v.011z"})})}),Object(d.jsx)("a",{id:"facebook-text",className:"social-text",href:"https://www.facebook.com/ucsbroboticsclub/",target:"_blank",rel:"noopener noreferrer",children:"UCSB Robotics Club"})]}),Object(d.jsxs)("div",{className:"social-media-container",children:[Object(d.jsx)("a",{className:"social-media-link",href:"mailto:roboticsclubucsb@gmail.com",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"email",width:"123",height:"79",viewBox:"0 0 122.9 78.6",children:Object(d.jsx)("path",{className:"email",d:"M61.1 66l24.2-24.2 36.8 36.8H73.7h-25.2H0l36.8-36.8L61.1 66 61.1 66zM1.4 0l59.7 59.7L120.7 0H1.4L1.4 0zM0 69.7l31.6-31.6L0 6.4V69.7L0 69.7zM122.9 72.7L88.2 38 122.9 3.4V72.7L122.9 72.7z"})})}),Object(d.jsx)("a",{id:"email-text",className:"social-text",href:"mailto:roboticsclubucsb@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"roboticsclubucsb@gmail.com"})]}),Object(d.jsx)("div",{className:"social-image-container",children:Object(d.jsx)("img",{className:"social-image",src:"/RoboticsWebsite/social-small.jpg",alt:"UCSB Robotics Social"})})]})},E=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,28)).then((function(t){var i=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;i(e),c(e),s(e),n(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root")),E()}},[[27,1,2]]]);
//# sourceMappingURL=main.aa19563c.chunk.js.map