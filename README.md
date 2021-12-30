# UCSB Robotics Website

About the website:

The website is hosted on GitHub pages and is built using ReactJS (create-react-app as a base)

To deploy to Azure for the first time, follow: https://docs.microsoft.com/en-us/azure/app-service/quickstart-nodejs?pivots=development-environment-vscode&tabs=windows#deploy-to-azure

## Updating Officer Profiles
1. Upload a square image of the officers inside of the `public\officer-images` directory. **It must be square** but any size works since it'll be resized. 
2. Modify the `officers.json` file inside of `public` folder with the new names, positions, descriptions, and image names. Make sure to include the file extension.
3. If you are updating the json file with more or less fields, be sure to modify the `testOfficers.js` under `src/error-checks`
4. Make sure the officer picture is square.
5. If you are modifying the path of the pictures, make sure to update the officer component.

## Updating Competitions/Projects
1. Upload an appropriately named .txt file inside of the `public\competitions` or `public\projects`
    * Think of the text file as what you'll see in the collapsible. Put two spaces to separate paragraphs, and put images where you want them to go in between paragraphs. At the moment, putting images next to words is not supported.
        * To properly embed images, put the path to the image as if you were already in the public folder. So, if the image was located in `/public/competititons/micromouse/micromouse.png`, inside of the `micromouse.txt` file, you would put: `competititons/micromouse/micromouse.png`.
        * If the image is showing up as the path in plain text, such as `competititons/micromouse/micromouse.png`, try to check the `collapsible.jsx` component's `checkIfphoto` function to make sure the file extension is supported. Add it in if it's not.
        * If the image is not found (like there's a weird icon/square), check to see if the path and the file name is correct.
    * If a bunch of weird html looking text shows up, either refresh the page or double check your `.txt` file path
2. Add the `<Collapsible />` component with the correct props, referencing the correct path to the .txt file and adding the correct props (please see `collapsible.jsx` comments for details) 

## Updating Club Photos Gallery


## Updating Video Library Password
1. Make sure you have a .env file
2. Name the variable `REACT_APP_VIDEO_LIBRARY_PASSWORD`. For example: `REACT_APP_VIDEO_LIBRARY_PASSWORD = iloveucsbrobotics`
3. Deploy website

## Future Areas of Improvement
1. Using .scss instead of .css and break the giant css file up
2. Implement a webhook or something to display Discord announcements on the website
3. SEO using either Next.js or Gatsby
4. Officer portfolio/linkedin profile/whatever link they want
5. A better system for updating content for a webmaster that doesn't know React?
6. Fix the key in "collapsible component" to be better unique. Currently, it makes the content its key and a random number just in case you have repeated paragraphs or images, but it's just a hacky solution
