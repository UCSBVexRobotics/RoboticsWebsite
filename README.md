# UCSB Robotics Website

About the website:

The website is hosted on Microsoft Azure and is built using ReactJS (create-react-app as a base) on NodeJS v14.15.3

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
        * If the image is showing up as the path in plain text, such as ``competititons/micromouse/micromouse.png`, try to check the `collapsible.jsx` component's `checkIfphoto` function to make sure the file extension is supported. Add it in if it's not.
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

## Using Azure with BlueHost
* BlueHost Domains With Azure App: https://docs.microsoft.com/en-us/azure/app-service/app-service-web-tutorial-custom-domain?tabs=a#cname, https://stackoverflow.com/questions/49164731/dns-use-bluehost-domain-with-azure

## Configuring HTTPS With a CDN and Azure
1. Read the steps here to create a free certificate: https://docs.microsoft.com/en-us/azure/app-service/configure-ssl-certificate#create-a-free-managed-certificate. Do this for both domain names: `ucsbrc.com` AND `www.ucsbrc.com`. Yes, they are different and you need to do it for both.
2. Read the steps here to create a SSL binding: https://docs.microsoft.com/en-us/azure/app-service/configure-ssl-bindings#create-binding. Go to step 3 and 4 to get the correct binding type for each domain.
3. Create an **SNI Based** binding for `www.ucsbrc.com`
4. Create an **IP SSL Based** binding for `ucsbrc.com`. This is IP based since on mobile devices, the Azure certificate is presented instead of the `ucsbrc.com` one when someone navigates to `ucsbrc.com`, and a domain mismatch warning occurs.
![Picture of bindings](https://github.com/UCSBVexRobotics/RoboticsWebsite/blob/main/completed_bindings.png?raw=true)
5. Go to BlueHost and point the A name from the previous IP to the new IP located under "custom domain". By setting an IP SSL Based binding, the IP for the website is reset.
![Picture of Azure Domain Page](https://github.com/UCSBVexRobotics/RoboticsWebsite/blob/main/domain_page.png?raw=true)
![Picture of BlueHost A Name](https://github.com/UCSBVexRobotics/RoboticsWebsite/blob/main/bluehost_a.png?raw=true)
6. This certificate will renew every year.

## Issues Encountered with Azure Hosting
* All .json files are 404. Make sure the webpack.config is set up correctly: https://stackoverflow.com/questions/12378712/loading-json-files-generates-404-errors and also the webpack.config should be put in the **public folder**, not the root of the repository.
* Mobile browsers had a domain mismatch error for `ucsbrc.com` regarding the security certificate. This was solved by creating an IP SSL Based binding for `ucsbrc.com`.